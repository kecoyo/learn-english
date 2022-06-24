module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  rules: {
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'global-require': 0,
    'importprefer-default-export': 0,
    'import/prefer-default-export': 0,
    'import/no-import-module-exports': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/order': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-restricted-exports': 0,
    'no-await-in-loop': 0,
    'no-console': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-return-assign': 0,
    'no-return-await': 0,
    'no-unused-expressions': 0,
    'no-restricted-globals': 0,
    'no-prototype-builtins': 0,
    'no-restricted-properties': 0,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'react-hooks/rules-of-hooks': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/no-unused-class-component-methods': 0,
  },
  settings: {
    'import/resolver': 'webpack',
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
};