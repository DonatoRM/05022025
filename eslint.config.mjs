import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [{ languageOptions: { globals: globals.browser } }, pluginJs.configs.recommended, prettier];
