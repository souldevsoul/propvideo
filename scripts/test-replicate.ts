/**
 * Test script to verify Replicate API integration
 *
 * Run with: npx tsx scripts/test-replicate.ts
 */

import 'dotenv/config';
import { replicate } from '../lib/replicate';

async function testReplicateConnection() {
  console.log('🔍 Testing Replicate API connection...\n');

  try {
    // Test 1: Check authentication
    console.log('Test 1: Checking authentication...');
    const account = await replicate.accounts.current();
    console.log('✅ Authentication successful!');
    console.log(`   Account: ${account.username || 'N/A'}`);
    console.log('');

    // Test 2: List available models
    console.log('Test 2: Checking available video generation models...');

    // Check Luma Ray
    try {
      const lumaModel = await replicate.models.get('luma', 'ray');
      console.log('✅ Luma Ray model is available');
      console.log(`   Latest version: ${lumaModel.latest_version?.id?.substring(0, 12)}...`);
    } catch (error) {
      console.log('❌ Luma Ray model not accessible');
    }

    // Check other potential models
    const modelsToCheck = [
      { owner: 'google', name: 'veo-3.1' },
      { owner: 'minimax', name: 'video-01' },
    ];

    for (const model of modelsToCheck) {
      try {
        const m = await replicate.models.get(model.owner, model.name);
        console.log(`✅ ${model.owner}/${model.name} is available`);
        console.log(`   Latest version: ${m.latest_version?.id?.substring(0, 12)}...`);
      } catch (error) {
        console.log(`⚠️  ${model.owner}/${model.name} not accessible (may require access)`);
      }
    }

    console.log('');

    // Test 3: Test simple prediction (text-to-image as fallback)
    console.log('Test 3: Testing simple prediction (SDXL)...');
    try {
      const prediction = await replicate.predictions.create({
        version: 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b',
        input: {
          prompt: 'A beautiful modern house exterior',
          num_outputs: 1,
        },
      });

      console.log('✅ Prediction created successfully!');
      console.log(`   Prediction ID: ${prediction.id}`);
      console.log(`   Status: ${prediction.status}`);
      console.log(`   Get result at: https://replicate.com/p/${prediction.id}`);
    } catch (error) {
      console.log('❌ Failed to create prediction');
      if (error instanceof Error) {
        console.log(`   Error: ${error.message}`);
      }
    }

    console.log('');
    console.log('✨ Replicate API tests completed!');
    console.log('');
    console.log('📝 Next steps:');
    console.log('   1. Set up webhook endpoint for production');
    console.log('   2. Test with actual property photos');
    console.log('   3. Choose the best video generation model for your needs');

  } catch (error) {
    console.error('❌ Replicate API test failed:');
    if (error instanceof Error) {
      console.error(`   ${error.message}`);
    }
    console.error('');
    console.error('💡 Tips:');
    console.error('   - Check that REPLICATE_API_TOKEN is set in .env');
    console.error('   - Verify your API token at https://replicate.com/account/api-tokens');
    console.error('   - Make sure you have credits available');
    process.exit(1);
  }
}

// Run the test
testReplicateConnection().catch(console.error);
