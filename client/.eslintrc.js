module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'import/no-named-as-default': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};
