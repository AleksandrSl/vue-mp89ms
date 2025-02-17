import pluginVue from 'eslint-plugin-vue'

export default [
    ...pluginVue.configs['flat/recommended'],
    {
        files: ["*.js"],
        languageOptions: {
            globals: {
                node: true, // Enable Node.js global variables
            },
            parser: "@babel/eslint-parser",
            parserOptions: {
                requireConfigFile: false, // Compatibility with older projects
            },
        },
        rules: {
            // Add your custom rules here
        },
    },
];
