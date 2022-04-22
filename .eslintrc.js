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

module.exports = {
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
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
            parser: '@typescript-eslint/parser',
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'airbnb-typescript',
            ],
        },
    ],
};
