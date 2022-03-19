module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'prettier',
    ],
    plugins: [],
    // add your custom rules here
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
    // https://docs.w3cub.com/eslint/rules/
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        'vue/no-v-html': 'off',
        'vue/comment-directive': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-useless-catch': 'off', // https://eslint.org/docs/rules/no-useless-catch
        'import/no-mutable-exports': 'off',
        'lines-between-class-members': 'off',
        'no-useless-return': 'off',
        'no-undef': 'off',
        'vue/script-setup-uses-vars': 'off',
        'vue/valid-v-slot': [
            'error',
            {
                allowModifiers: true,
            },
        ],
    },
};
