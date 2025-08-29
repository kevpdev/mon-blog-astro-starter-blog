import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,ts,astro}'],
    plugins: {
      '@typescript-eslint': typescript,
      'astro': astro,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': ['warn', { allow: ['error'] }],
      '@typescript-eslint/no-unused-vars': 'error',
      'max-lines-per-function': ['warn', { max: 60 }],
      'complexity': ['warn', 10],
    },
    ignores: ['dist', '.astro', 'node_modules'],
  },
  {
    files: ['**/*.astro'],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astro.parsers['astro-eslint-parser'],
      parserOptions: {
        parser: typescriptParser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      ...astro.configs.recommended.rules,
    },
  },
];