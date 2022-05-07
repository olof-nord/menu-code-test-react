module.exports = {
    setupFilesAfterEnv: [
        '<rootDir>/src/server/utils/setupBackendTests.js'
    ],
    collectCoverage: true,
    collectCoverageFrom: ['src/server/**/*.js'],
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/src/components/',
        '<rootDir>/src/utils/',
        '<rootDir>/src/server/static/',
    ]
};