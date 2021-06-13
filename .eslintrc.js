module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
    ],
    extends: [
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "@typescript-eslint/no-unsued-vars:" : "off",
        '@typescript-eslint/explicit-function-return-type': 'off',
        "prefer-const": "off",
    },
    overrides: [{
        "files": ["*.js"],
        "rules": {
            "@typescript-eslint/no-var-requires": "off",
        }
    }],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
    },
}