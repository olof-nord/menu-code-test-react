module.exports = {
    'setupFilesAfterEnv': [
        '<rootDir>/src/utils/setupFrontendTests.js'
    ],
    testEnvironment: "jsdom",
    testTimeout: 20000,
};