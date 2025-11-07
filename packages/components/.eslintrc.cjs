/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'react/prop-types': 'off', // 使用 TypeScript，不需要 prop-types
    'react/react-in-jsx-scope': 'off', // React 17+ 不需要导入 React
    'react/jsx-uses-react': 'off', // React 17+ 不需要导入 React
    'react/jsx-uses-vars': 'error',
    'react/jsx-key': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-danger': 'warn',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'warn',
    'react/require-render-return': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off', // 使用 @typescript-eslint/no-unused-vars
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-undef': 'off', // TypeScript 会处理这个
    'no-redeclare': 'off'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.test.*', '**/*.spec.*'], // 匹配所有测试文件
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react/display-name': 'off'
      }
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  globals: {
    registerPaint: 'readonly',
    globalThis: 'readonly',
    CSSStyleValue: 'readonly',
    StylePropertyMap: 'readonly',
    PaintRenderingContext2D: 'readonly',
    PaintWorklet: 'readonly',
    EventListener: 'readonly',
    TEST: 'readonly'
  }
}