import Replicate from 'replicate';

if (!process.env.REPLICATE_API_TOKEN) {
  throw new Error('REPLICATE_API_TOKEN is not set in environment variables');
}

export const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export interface VideoGenerationParams {
  photos: string[]; // Array of photo URLs
  duration: number; // Duration in seconds
  tourStyle: string; // Style name (luxury, modern, etc.)
  voiceoverText: string; // Voiceover script
  voiceStyle: string; // Voice style (professional, friendly, etc.)
  aspectRatio: string; // 16:9, 9:16, 1:1, 4:5
}

/**
 * Generate a property tour video using Replicate
 * Note: This is a placeholder implementation. The actual model and parameters
 * will depend on which video generation model is used (Luma Ray, Google Veo, etc.)
 */
export async function generatePropertyTourVideo(params: VideoGenerationParams) {
  try {
    // We're using Luma Ray for video generation
    // It's fast, high quality, and supports various aspect ratios
    // Alternative models: google/veo-3.1, minimax/video-01
    const model = 'luma/ray';
    const version = 'ace5984f339448d75fb91acd9caad42fc8c07aadee351d6cf0b167d6e89c50c4';

    // Calculate aspect ratio dimensions
    const aspectRatioDimensions: Record<string, { width: number; height: number }> = {
      '16:9': { width: 1920, height: 1080 },
      '9:16': { width: 1080, height: 1920 },
      '1:1': { width: 1080, height: 1080 },
      '4:5': { width: 1080, height: 1350 },
    };

    const dimensions = aspectRatioDimensions[params.aspectRatio] || aspectRatioDimensions['16:9'];

    // Create a prompt that describes the property tour
    const prompt = generateVideoPrompt(params);

    console.log('Starting video generation with Replicate:', {
      model,
      version: version.substring(0, 12) + '...',
      prompt: prompt.substring(0, 100) + '...',
      dimensions,
    });

    // Start the prediction
    // Note: Luma Ray expects specific input format
    const prediction = await replicate.predictions.create({
      version,
      input: {
        prompt,
        aspect_ratio: params.aspectRatio,
        // keyframes: { frame0: { type: 'image', url: params.photos[0] } }, // Optional: start with first photo
      },
    });

    console.log('Replicate prediction created:', prediction.id);

    return {
      predictionId: prediction.id,
      status: prediction.status,
      urls: prediction.urls,
    };
  } catch (error) {
    console.error('Error generating video with Replicate:', error);
    throw error;
  }
}

/**
 * Generate a descriptive prompt for video generation based on tour parameters
 */
function generateVideoPrompt(params: VideoGenerationParams): string {
  const styleDescriptions: Record<string, string> = {
    luxury: 'Cinematic luxury real estate tour with elegant camera movements, warm golden lighting, and sophisticated transitions.',
    modern: 'Contemporary architectural tour with clean lines, cool color palette, and smooth cinematic transitions.',
    cozy: 'Warm and inviting home tour with soft natural lighting, gentle camera movements, and comfortable atmosphere.',
    dramatic: 'Dynamic property showcase with dramatic lighting, bold camera angles, and high-contrast visuals.',
    energetic: 'Vibrant and upbeat property tour with quick transitions, bright colors, and dynamic camera work.',
    elegant: 'Refined and sophisticated tour with graceful camera movements, neutral tones, and timeless appeal.',
    minimalist: 'Clean and simple architectural tour with minimal movement, neutral colors, and focus on space.',
    rustic: 'Warm country home tour with natural lighting, earthy tones, and inviting atmosphere.',
  };

  const styleDesc = styleDescriptions[params.tourStyle] || styleDescriptions['modern'];

  // Build prompt based on the voiceover text and style
  const prompt = `${styleDesc} Professional property tour video transitioning smoothly through interior spaces. ${params.voiceoverText.substring(0, 200)}. High quality, 4K resolution, professional real estate videography.`;

  return prompt;
}

/**
 * Check the status of a video generation prediction
 */
export async function checkPredictionStatus(predictionId: string) {
  try {
    const prediction = await replicate.predictions.get(predictionId);

    return {
      id: prediction.id,
      status: prediction.status,
      output: prediction.output,
      error: prediction.error,
      logs: prediction.logs,
    };
  } catch (error) {
    console.error('Error checking prediction status:', error);
    throw error;
  }
}

/**
 * Cancel a running prediction
 */
export async function cancelPrediction(predictionId: string) {
  try {
    await replicate.predictions.cancel(predictionId);
    console.log('Prediction cancelled:', predictionId);
  } catch (error) {
    console.error('Error cancelling prediction:', error);
    throw error;
  }
}
