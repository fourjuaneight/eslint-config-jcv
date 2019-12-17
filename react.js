module.exports = {
  extends: ['prettier/react'],
  plugins: ['react-hooks'],
  rules: {
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'jsx-a11y/label-has-for': 0,
    'react/display-name': 1,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/no-array-index-key': 0,
    'react/no-unescaped-entities': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
};
