import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { checkPredictionStatus } from '@/lib/replicate';

/**
 * GET /api/videos/[id]
 * Get video details and optionally check Replicate status
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const checkStatus = searchParams.get('checkStatus') === 'true';

    const video = await prisma.propertyVideo.findUnique({
      where: { id },
      include: {
        property: {
          include: {
            photos: {
              orderBy: { order: 'asc' },
            },
          },
        },
      },
    });

    if (!video) {
      return NextResponse.json({
        success: false,
        error: 'Video not found',
      }, { status: 404 });
    }

    // If video is processing and checkStatus is true, poll Replicate for latest status
    if (checkStatus && video.replicateId && video.status === 'processing') {
      try {
        const replicateStatus = await checkPredictionStatus(video.replicateId);

        // Update video if status changed
        if (replicateStatus.status === 'succeeded' && replicateStatus.output) {
          const videoUrl = Array.isArray(replicateStatus.output)
            ? replicateStatus.output[0]
            : replicateStatus.output;

          await prisma.propertyVideo.update({
            where: { id },
            data: {
              status: 'completed',
              videoUrl: typeof videoUrl === 'string' ? videoUrl : null,
            },
          });

          video.status = 'completed';
          video.videoUrl = typeof videoUrl === 'string' ? videoUrl : null;
        } else if (replicateStatus.status === 'failed') {
          await prisma.propertyVideo.update({
            where: { id },
            data: { status: 'failed' },
          });

          video.status = 'failed';
        }
      } catch (error) {
        console.error('Error checking Replicate status:', error);
        // Continue returning the current video state
      }
    }

    return NextResponse.json({
      success: true,
      video,
    });
  } catch (error) {
    console.error('Error fetching video:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch video',
    }, { status: 500 });
  }
}

/**
 * DELETE /api/videos/[id]
 * Delete a video
 */
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // TODO: Get userId from session and verify ownership

    const video = await prisma.propertyVideo.findUnique({
      where: { id },
    });

    if (!video) {
      return NextResponse.json({
        success: false,
        error: 'Video not found',
      }, { status: 404 });
    }

    // If video is still processing, we could cancel the Replicate prediction
    // if (video.replicateId && video.status === 'processing') {
    //   await cancelPrediction(video.replicateId);
    // }

    await prisma.propertyVideo.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
      message: 'Video deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting video:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to delete video',
    }, { status: 500 });
  }
}

/**
 * PATCH /api/videos/[id]
 * Update video settings (requires regeneration)
 */
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    // TODO: Get userId from session and verify ownership

    const video = await prisma.propertyVideo.findUnique({
      where: { id },
    });

    if (!video) {
      return NextResponse.json({
        success: false,
        error: 'Video not found',
      }, { status: 404 });
    }

    // Update only editable fields
    const updatedVideo = await prisma.propertyVideo.update({
      where: { id },
      data: {
        voiceoverText: body.voiceoverText || video.voiceoverText,
        voiceStyle: body.voiceStyle || video.voiceStyle,
        musicTrack: body.musicTrack !== undefined ? body.musicTrack : video.musicTrack,
        agentName: body.agentName !== undefined ? body.agentName : video.agentName,
        agentPhone: body.agentPhone !== undefined ? body.agentPhone : video.agentPhone,
        agentEmail: body.agentEmail !== undefined ? body.agentEmail : video.agentEmail,
        agentLogoUrl: body.agentLogoUrl !== undefined ? body.agentLogoUrl : video.agentLogoUrl,
        brokerageName: body.brokerageName !== undefined ? body.brokerageName : video.brokerageName,
      },
    });

    return NextResponse.json({
      success: true,
      video: updatedVideo,
      message: 'Video updated successfully. Regenerate to apply changes.',
    });
  } catch (error) {
    console.error('Error updating video:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to update video',
    }, { status: 500 });
  }
}
