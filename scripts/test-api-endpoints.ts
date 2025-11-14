/**
 * Comprehensive API endpoints test script
 *
 * Run with: npx tsx scripts/test-api-endpoints.ts
 */

import 'dotenv/config';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message: string, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

async function testEndpoint(name: string, url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    const data = await response.json();

    if (response.ok) {
      log(`✅ ${name}`, colors.green);
      return { success: true, data, status: response.status };
    } else {
      log(`❌ ${name} - ${data.error || 'Failed'}`, colors.red);
      return { success: false, data, status: response.status };
    }
  } catch (error) {
    log(`❌ ${name} - ${error instanceof Error ? error.message : 'Unknown error'}`, colors.red);
    return { success: false, error, status: 0 };
  }
}

async function runTests() {
  log('\n🧪 PropVideo API Endpoints Test Suite\n', colors.cyan);
  log('═══════════════════════════════════════\n', colors.cyan);

  const results: { passed: number; failed: number } = { passed: 0, failed: 0 };
  let propertyId = '';
  const videoId = '';

  // Test 1: Tour Styles
  log('\n📋 Test Group 1: Tour Styles API', colors.blue);
  log('─────────────────────────────────', colors.blue);

  const tourStylesTest = await testEndpoint(
    'GET /api/tour-styles',
    `${BASE_URL}/api/tour-styles`
  );
  tourStylesTest.success ? results.passed++ : results.failed++;

  if (tourStylesTest.success && tourStylesTest.data.tourStyles) {
    log(`   Found ${tourStylesTest.data.tourStyles.length} tour styles`, colors.cyan);
  }

  const popularStylesTest = await testEndpoint(
    'GET /api/tour-styles?popular=true',
    `${BASE_URL}/api/tour-styles?popular=true`
  );
  popularStylesTest.success ? results.passed++ : results.failed++;

  if (popularStylesTest.success && popularStylesTest.data.tourStyles) {
    log(`   Found ${popularStylesTest.data.tourStyles.length} popular tour styles`, colors.cyan);
  }

  // Test 2: Properties API
  log('\n🏠 Test Group 2: Properties API', colors.blue);
  log('─────────────────────────────────', colors.blue);

  // Create property
  const createPropertyTest = await testEndpoint(
    'POST /api/properties/create',
    `${BASE_URL}/api/properties/create`,
    {
      method: 'POST',
      body: JSON.stringify({
        address: '123 Test Street',
        city: 'San Francisco',
        state: 'CA',
        zipCode: '94105',
        propertyType: 'single-family',
        listingType: 'sale',
        price: 1250000,
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 2000,
        lotSize: 0.25,
        yearBuilt: 2020,
        description: 'Beautiful test property for API testing',
        mlsNumber: 'TEST-123456',
      }),
    }
  );
  createPropertyTest.success ? results.passed++ : results.failed++;

  if (createPropertyTest.success && createPropertyTest.data.property) {
    propertyId = createPropertyTest.data.property.id;
    log(`   Created property with ID: ${propertyId}`, colors.cyan);
  }

  // List properties
  const listPropertiesTest = await testEndpoint(
    'GET /api/properties',
    `${BASE_URL}/api/properties?page=1&limit=10`
  );
  listPropertiesTest.success ? results.passed++ : results.failed++;

  // Get single property
  if (propertyId) {
    const getPropertyTest = await testEndpoint(
      'GET /api/properties/[id]',
      `${BASE_URL}/api/properties/${propertyId}`
    );
    getPropertyTest.success ? results.passed++ : results.failed++;

    // Update property
    const updatePropertyTest = await testEndpoint(
      'PATCH /api/properties/[id]',
      `${BASE_URL}/api/properties/${propertyId}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          description: 'Updated test property description',
        }),
      }
    );
    updatePropertyTest.success ? results.passed++ : results.failed++;
  }

  // Test 3: Video Generation API
  log('\n🎬 Test Group 3: Video Generation API', colors.blue);
  log('────────────────────────────────────', colors.blue);

  if (propertyId) {
    // Note: This will fail without photos, which is expected
    log('   ⚠️  Skipping video generation (requires 5+ photos)', colors.yellow);
    log('   Testing validation instead...', colors.yellow);

    const generateVideoTest = await testEndpoint(
      'POST /api/videos/generate (validation)',
      `${BASE_URL}/api/videos/generate`,
      {
        method: 'POST',
        body: JSON.stringify({
          propertyId,
          tourStyle: 'luxury',
          duration: 60,
          aspectRatio: '16:9',
          voiceoverText: 'Test voiceover',
          voiceStyle: 'professional',
          agentName: 'Test Agent',
          agentPhone: '(555) 123-4567',
          agentEmail: 'support@propvideo.ai',
        }),
      }
    );

    // This should fail with "not enough photos" error
    if (generateVideoTest.status === 400 && generateVideoTest.data.error?.includes('photos')) {
      log('✅ Video validation working correctly (requires photos)', colors.green);
      results.passed++;
    } else {
      results.failed++;
    }
  }

  // Test 4: Webhook endpoint
  log('\n🔔 Test Group 4: Webhook API', colors.blue);
  log('─────────────────────────────────', colors.blue);

  const webhookHealthTest = await testEndpoint(
    'GET /api/webhooks/replicate (health)',
    `${BASE_URL}/api/webhooks/replicate`
  );
  webhookHealthTest.success ? results.passed++ : results.failed++;

  // Test 5: Error Handling
  log('\n❌ Test Group 5: Error Handling', colors.blue);
  log('─────────────────────────────────', colors.blue);

  // Non-existent property
  const notFoundTest = await testEndpoint(
    'GET /api/properties/[invalid-id]',
    `${BASE_URL}/api/properties/invalid-id-12345`
  );
  notFoundTest.status === 404 ? results.passed++ : results.failed++;

  // Invalid data
  const invalidDataTest = await testEndpoint(
    'POST /api/properties/create (invalid)',
    `${BASE_URL}/api/properties/create`,
    {
      method: 'POST',
      body: JSON.stringify({
        address: '123 Test',
        // Missing required fields
      }),
    }
  );
  invalidDataTest.status === 400 ? results.passed++ : results.failed++;

  // Test 6: Cleanup
  log('\n🧹 Test Group 6: Cleanup', colors.blue);
  log('─────────────────────────────────', colors.blue);

  if (propertyId) {
    const deletePropertyTest = await testEndpoint(
      'DELETE /api/properties/[id]',
      `${BASE_URL}/api/properties/${propertyId}`,
      { method: 'DELETE' }
    );
    deletePropertyTest.success ? results.passed++ : results.failed++;
    log(`   Deleted test property ${propertyId}`, colors.cyan);
  }

  // Final Results
  log('\n═══════════════════════════════════════', colors.cyan);
  log('📊 Test Results Summary\n', colors.cyan);
  log(`✅ Passed: ${results.passed}`, colors.green);
  log(`❌ Failed: ${results.failed}`, colors.red);
  log(`📈 Success Rate: ${Math.round((results.passed / (results.passed + results.failed)) * 100)}%\n`, colors.cyan);

  if (results.failed === 0) {
    log('🎉 All tests passed!', colors.green);
    process.exit(0);
  } else {
    log('⚠️  Some tests failed. Please review the output above.', colors.yellow);
    process.exit(1);
  }
}

// Run tests
log('Starting tests in 2 seconds...', colors.yellow);
setTimeout(runTests, 2000);
