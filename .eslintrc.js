module.exports = {
  plugins: ['prettier'],
  extends: [
    'next',
    'eslint-config-next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    indent: ['error', 2],
    eqeqeq: 'error',
    'no-undef': 'error',
    'no-console': 'warn',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'for-direction': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
