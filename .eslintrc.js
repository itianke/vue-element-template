// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard"
    ],
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    // add your custom rules here
    rules: {
        "generator-star-spacing": "off",
        "indent": [1, 4, {
            "SwitchCase": 1
        }],
        "space-before-function-paren": [0, "always"],
        "space-infix-ops": [2, { "int32Hint": false }],
        "no-multi-spaces": [0],
        "no-unused-vars": [0],
        "no-multiple-empty-lines": [0],
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
}
