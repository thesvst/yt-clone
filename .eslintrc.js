const path = require('path');

const extend = [
  'airbnb',
  'airbnb/hooks',
];

const settings = {
  'import/resolver': {
    node: {
      paths: [
        path.resolve(__dirname, '.'),
      ],
      alias: {
        map: [],
        extensions: [
          '.ts',
          '.tsx',
          '.scss',
        ],
      },
    },
  },
};

const rules = {
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error'],
  'jsx-a11y/label-has-associated-control': ['error', {
    required: {
      some: ['nesting', 'id'],
    },
  }],
  'jsx-a11y/label-has-for': ['error', {
    required: {
      some: ['nesting', 'id'],
    },
  }],
  'max-len': [2, 120, 2, {
    ignoreUrls: true,
    ignoreComments: true,
    ignoreRegExpLiterals: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
  }],
  'react/function-component-definition': [
    2,
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  radix: 0,
  'react/sort-prop-types': [2, {
    ignoreCase: true,
    requiredFirst: true,
    callbacksLast: true,
  }],
  'react/no-typos': [1],
  'react/destructuring-assignment': [0],
  'react/jsx-fragments': [1],
  'jsx-a11y/no-static-element-interactions': [0],
  'jsx-a11y/click-events-have-key-events': [0],
  'jsx-a11y/anchor-is-valid': [0],
  'import/prefer-default-export': [0],
  'react/jsx-props-no-spreading': [0],
  'prefer-destructuring': ['error', {
    array: false,
  }],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: 'let', next: 'return' },
    { blankLine: 'always', prev: 'const', next: 'return' },
    { blankLine: 'always', prev: 'block-like', next: 'block-like' },
  ],
  'no-console': [1],
  'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
  'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  'react/forbid-prop-types': [1, { forbid: ['array', 'object'] }],
  'import/order': [
    2,
    {
      groups: [['builtin', 'external'], 'internal', ['sibling', 'parent']],
      'newlines-between': 'always-and-inside-groups',
    },
  ],
  'import/no-extraneous-dependencies': 'off',
  'no-param-reassign': ['error', {
    props: true,
    ignorePropertyModificationsForRegex: ['^draft'],
    ignorePropertyModificationsFor: ['state'],
  }],
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'implicit-arrow-linebreak': 0,
};

module.exports = {
  rules,
  settings,
  extends: extend,
  globals: {
    window: true,
    localStorage: true,
    sessionStorage: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    babelOptions: {
      configFile: path.resolve(__dirname, './.babelrc'),
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      parser: '@typescript-eslint/parser',
      rules: {
        'react/require-default-props': [0],
        'react/default-props-match-prop-types': [0],
        '@typescript-eslint/restrict-template-expressions': ['error', { allowAny: true }],
        '@typescript-eslint/no-unsafe-argument': [1],
        '@typescript-eslint/no-unsafe-member-access': [1],
        '@typescript-eslint/no-unsafe-assignment': [1],
        '@typescript-eslint/no-unsafe-call': [1],
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
      ],
    },
  ],
};
