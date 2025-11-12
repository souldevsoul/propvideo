import tsParser from '@typescript-eslint/parser';
import productQuality from './eslint-plugin-product-quality/index.js';
export default [{
  files: ['**/*.{ts,tsx,js,jsx}'],
  languageOptions: { parser: tsParser, parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } } },
  plugins: { 'product-quality': productQuality },
  rules: {
    'product-quality/no-broken-internal-links': 'warn',
    'product-quality/use-styleguide-colors-only': ['warn', { allowedColors: ['black', 'white', 'transparent', 'current', 'inherit', 'gray-', 'slate-', 'zinc-', 'neutral-', 'blue-', 'indigo-', 'red-', 'green-'] }],
    'product-quality/consistent-payment-providers': ['warn', { provider: 'stripe' }],
    'product-quality/consistent-company-info': ['warn', { companyName: 'PropVideo', email: 'support@propvideo.ai' }],
    'product-quality/no-button-without-handler': 'warn', 'product-quality/no-form-without-submit': 'error',
    'product-quality/no-missing-alt-text': 'error', 'product-quality/require-try-catch-fetch': 'warn',
  }
}];
