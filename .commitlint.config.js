module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      2,
      'never',
      ['upper-case'],
    ],
    'references-empty': [0, 'never'],
    'body-max-line-length': [0, 'always', 'Infinity'],
    'subject-full-stop': [0, 'never'],
    'body-leading-blank': [0, 'never'],
  },
};
