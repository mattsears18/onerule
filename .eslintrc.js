// module.exports = {

//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//     // 'react-app',
//     // 'react-app/jest',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint'],
//   rules: {},
// };

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:@typescript-eslint/recommended',
//     'airbnb',
//     'plugin:prettier/recommended',
//   ],
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   rules: {
//     // '@typescript-eslint/indent': ['error', 2],
//     '@typescript-eslint/no-unused-vars': 'error',
//     '@typescript-eslint/no-explicit-any': 'error',
//   },
// };

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-console': 'error',
    'import/first': 'error',
    'react/prop-types': 'off',
    'sonarjs/cognitive-complexity': ['error', 5],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unreachable': 'error',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  plugins: ['react', '@typescript-eslint', 'import', 'sonarjs'],
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
