import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const tourStyles = [
  {
    name: 'luxury',
    displayName: 'Luxury',
    description: 'Slow, elegant transitions with warm color grading and orchestral music. Perfect for high-end properties and luxury estates.',
    transitionStyle: 'smooth',
    colorGrading: 'warm',
    pace: 'slow',
    musicGenre: ['orchestral', 'classical'],
    popular: true,
    order: 1,
  },
  {
    name: 'modern',
    displayName: 'Modern',
    description: 'Medium-paced tour with cool color grading and ambient music. Great for contemporary homes and urban properties.',
    transitionStyle: 'cinematic',
    colorGrading: 'cool',
    pace: 'medium',
    musicGenre: ['ambient', 'electronic'],
    popular: true,
    order: 2,
  },
  {
    name: 'cozy',
    displayName: 'Cozy',
    description: 'Slow, warm tour with soft transitions and acoustic music. Ideal for family homes and comfortable living spaces.',
    transitionStyle: 'smooth',
    colorGrading: 'warm',
    pace: 'slow',
    musicGenre: ['acoustic', 'folk'],
    popular: true,
    order: 3,
  },
  {
    name: 'dramatic',
    displayName: 'Dramatic',
    description: 'Fast-paced with high contrast and epic music. For properties that wow and make a bold statement.',
    transitionStyle: 'cinematic',
    colorGrading: 'vibrant',
    pace: 'fast',
    musicGenre: ['epic', 'dramatic'],
    popular: false,
    order: 4,
  },
  {
    name: 'energetic',
    displayName: 'Energetic',
    description: 'Fast, vibrant tour with upbeat music. Perfect for appealing to younger buyers and first-time homeowners.',
    transitionStyle: 'quick',
    colorGrading: 'vibrant',
    pace: 'fast',
    musicGenre: ['upbeat', 'pop'],
    popular: false,
    order: 5,
  },
  {
    name: 'elegant',
    displayName: 'Elegant',
    description: 'Slow, refined tour with neutral tones and classical music. For sophisticated properties with timeless appeal.',
    transitionStyle: 'elegant',
    colorGrading: 'neutral',
    pace: 'slow',
    musicGenre: ['classical', 'piano'],
    popular: true,
    order: 6,
  },
  {
    name: 'minimalist',
    displayName: 'Minimalist',
    description: 'Clean, simple transitions with neutral grading and ambient music. Perfect for modern minimalist designs.',
    transitionStyle: 'smooth',
    colorGrading: 'neutral',
    pace: 'medium',
    musicGenre: ['ambient', 'minimal'],
    popular: false,
    order: 7,
  },
  {
    name: 'rustic',
    displayName: 'Rustic',
    description: 'Warm, earthy tour with natural transitions and folk music. Great for country homes and rustic properties.',
    transitionStyle: 'smooth',
    colorGrading: 'warm',
    pace: 'slow',
    musicGenre: ['folk', 'acoustic'],
    popular: false,
    order: 8,
  },
];

async function main() {
  console.log('🎨 Seeding tour styles...');

  // Delete existing tour styles
  await prisma.tourStyle.deleteMany();
  console.log('🗑️  Cleared existing tour styles');

  // Create new tour styles
  for (const style of tourStyles) {
    const created = await prisma.tourStyle.create({
      data: style,
    });
    console.log(`✅ Created tour style: ${created.displayName}`);
  }

  console.log('✨ Tour styles seeded successfully!');
  console.log(`📊 Total styles: ${tourStyles.length}`);
  console.log(`⭐ Popular styles: ${tourStyles.filter(s => s.popular).length}`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding tour styles:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
