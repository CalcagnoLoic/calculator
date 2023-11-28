module.exports = {
    env: {
        browser: true,
        es2015: true,
        node: true
    },
    extends: "eslint:recommended",
    overrides: [
        {
            env: {
                node: true,
                browser: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {}
};
