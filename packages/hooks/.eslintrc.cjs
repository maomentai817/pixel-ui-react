/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    '@typescript-eslint/recommended',
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
    'react/prop-types': 'off', // Not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React import
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off', // Handled by @typescript-eslint
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-undef': 'off', // Handled by TypeScript
    'no-redeclare': 'off', // Handled by TypeScript
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      { ignoreDeclarationMerge: true }
    ]
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
        // 对测试文件禁用一些规则
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ],
  globals: {
    // 定义全局变量，例如 Paint Worklet 相关的全局变量
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
