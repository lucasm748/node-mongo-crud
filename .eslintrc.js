module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'airbnb-base', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'no-console': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
};
