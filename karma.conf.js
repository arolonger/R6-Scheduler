module.exports = function (config) {
    config.set({
        client: {
            clearContext: false
        },
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            "src/**/*.ts"
        ],
        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },
        reporters: ["kjhtml"],
        browsers: ["Chrome"],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-typescript',
            'karma-jasmine-html-reporter',
        ],
        // logLevel: config.LOG_DEBUG,
        karmaTypescriptConfig: {
            bundlerOptions: {
                transforms: [
                    require("karma-typescript-es6-transform")()
                ]
            }
        },
    });
};
