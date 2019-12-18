module.exports = {
  env: {
    browser: true,
    jest: true,
    jquery: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
    sourceType: 'module',
  },
  plugins: ['html', 'prettier'],
  rules: {
    'id-length': [
      2,
      {
        exceptions: ['a', 'b', 'i', 'x', 'y', 'z'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'auto',
        printWidth: 80,
        proseWrap: 'preserve',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
        overrides: [
          {
            files: '*.json',
            options: {
              printWidth: 200,
            },
          },
        ],
      },
    ],
  },
};
