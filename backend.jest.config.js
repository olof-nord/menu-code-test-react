module.exports = {
    setupFilesAfterEnv: [
        '<rootDir>/src/server/utils/setupBackendTests.js'
    ],
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/src/components/',
        '<rootDir>/src/utils/',
    ]
};