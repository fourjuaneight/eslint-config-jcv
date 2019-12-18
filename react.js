module.exports = {
  extends: ['prettier/react'],
  rules: {
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
