import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * Webhook endpoint for Replicate to send video generation updates
 *
 * Replicate will POST to this endpoint when a prediction status changes.
 * We'll update the video record in our database accordingly.
 *
 * To set up the webhook in Replicate:
 * 1. Go to https://replicate.com/account/webhooks
 * 2. Add webhook URL: https://your-domain.com/api/webhooks/replicate
 * 3. Select events: prediction.completed, prediction.failed
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log('Replicate webhook received:', {
      id: body.id,
      status: body.status,
      timestamp: new Date().toISOString(),
    });

    // Verify this is a Replicate webhook
    // In production, you should verify the webhook signature
    // https://replicate.com/docs/webhooks#verifying-webhooks

    const predictionId = body.id;
    const status = body.status;
    const output = body.output;
    const error = body.error;

    if (!predictionId) {
      console.error('No prediction ID in webhook payload');
      return NextResponse.json({ error: 'Invalid webhook payload' }, { status: 400 });
    }

    // Find the video record by Replicate prediction ID
    const video = await prisma.propertyVideo.findFirst({
      where: { replicateId: predictionId },
    });

    if (!video) {
      console.error(`No video found for prediction ID: ${predictionId}`);
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    console.log(`Updating video ${video.id} with status: ${status}`);

    // Update video based on prediction status
    if (status === 'succeeded' && output) {
      // Extract video URL from output
      // The output format depends on the model used
      let videoUrl: string | null = null;

      if (typeof output === 'string') {
        videoUrl = output;
      } else if (Array.isArray(output) && output.length > 0) {
        videoUrl = output[0];
      } else if (output && typeof output === 'object' && 'video' in output) {
        videoUrl = output.video;
      }

      if (videoUrl) {
        await prisma.propertyVideo.update({
          where: { id: video.id },
          data: {
            status: 'completed',
            videoUrl,
          },
        });

        console.log(`Video ${video.id} completed successfully: ${videoUrl}`);

        // TODO: Send notification to user (email, push, etc.)
      } else {
        console.error(`Could not extract video URL from output:`, output);
        await prisma.propertyVideo.update({
          where: { id: video.id },
          data: {
            status: 'failed',
          },
        });
      }
    } else if (status === 'failed' || status === 'canceled') {
      await prisma.propertyVideo.update({
        where: { id: video.id },
        data: {
          status: 'failed',
        },
      });

      console.error(`Video ${video.id} failed:`, error);

      // TODO: Send failure notification to user
    } else if (status === 'processing' || status === 'starting') {
      // Keep status as processing
      await prisma.propertyVideo.update({
        where: { id: video.id },
        data: {
          status: 'processing',
        },
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing Replicate webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}

/**
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Replicate webhook endpoint is ready',
  });
}
