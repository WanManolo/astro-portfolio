import js from '@eslint/js'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tseslint from 'typescript-eslint'
import eslintPluginAstro from 'eslint-plugin-astro'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import jsxA11y from 'eslint-plugin-jsx-a11y'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default tseslint.config(
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro}'],
        plugins: {
            react,
            'react-hooks': reactHooks,
            'jsx-a11y': jsxA11y,
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            // TypeScript rules (type-aware rules only for .ts/.tsx files)
            '@typescript-eslint/no-unused-vars': ['error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // React rules
            'react/react-in-jsx-scope': 'off', // Not needed in React 17+
            'react/prop-types': 'off', // Using TypeScript for prop validation
            'react/jsx-uses-react': 'off',
            'react/jsx-uses-vars': 'error',
            'react/jsx-key': 'error',
            'react/jsx-no-duplicate-props': 'error',
            'react/jsx-no-undef': 'error',
            'react/no-children-prop': 'error',
            'react/no-unescaped-entities': 'error',
            'react/self-closing-comp': 'error',
            'react/jsx-boolean-value': ['error', 'never'],

            // React Hooks rules
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            // Accessibility rules
            'jsx-a11y/alt-text': 'error',
            'jsx-a11y/anchor-has-content': 'error',
            'jsx-a11y/anchor-is-valid': 'error',
            'jsx-a11y/aria-props': 'error',
            'jsx-a11y/aria-proptypes': 'error',
            'jsx-a11y/aria-unsupported-elements': 'error',
            'jsx-a11y/click-events-have-key-events': 'warn',
            'jsx-a11y/img-redundant-alt': 'error',
            'jsx-a11y/mouse-events-have-key-events': 'warn',
            'jsx-a11y/no-access-key': 'error',

            // Custom Tailwind-style rules (since eslint-plugin-tailwindcss is incompatible with v4)
            // 'no-restricted-syntax': [
            //     'error',
            //     {
            //         selector: 'Literal[value=/^(?!tw-)[a-z](?:[a-z0-9-]*[a-z0-9])?(?:\\s+(?!tw-)[a-z](?:[a-z0-9-]*[a-z0-9])?)*$/]',
            //         message: 'Use tw- prefixed classes for Tailwind CSS. Non-prefixed utility classes detected.'
            //     }
            // ],

            // General JavaScript/TypeScript rules
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-duplicate-imports': 'error',
            'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
            'prefer-const': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'prefer-arrow-callback': 'error',
            'array-callback-return': 'error',
            'eqeqeq': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
    {
        files: ['**/*.astro'],
        rules: {
            // Astro-specific rules
            'astro/no-conflict-set-directives': 'error',
            'astro/no-unused-define-vars-in-style': 'error',
            'astro/no-set-html-directive': 'warn',
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            // Type-aware TypeScript rules for .ts/.tsx files
            '@typescript-eslint/prefer-nullish-coalescing': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/no-floating-promises': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-misused-promises': 'error',

            // Additional TypeScript-specific rules for .ts/.tsx files
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
            '@typescript-eslint/no-import-type-side-effects': 'error',
        },
    },
    {
        ignores: [
            'dist/',
            'node_modules/',
            '.astro/',
            '*.config.js',
            '*.config.mjs',
            '*.config.ts',
        ],
    }
)