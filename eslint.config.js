import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.base],
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  {
    ignores: ['dist/'],
  },
);
