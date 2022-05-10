module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        // "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "indent": ['error', 4],
        "no-dupe-args": 2,  //禁止 function 定义中出现重名参数
        "no-dupe-keys": 2,  //禁止对象字面量中出现重复的 key
        "no-empty": 1,      //禁止出现空语句块
        "no-duplicate-case": 2, //禁止出现重复的 case 标签
        "no-unused-expressions": 1, //禁止出现未使用过的表达式
        "no-redeclare": 2,    //禁止多次声明同一变量
        "eqeqeq": 2,     //要求使用 === 和 !==
    },
};
