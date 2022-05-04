module.exports = {
    setupFilesAfterEnv: [
        '<rootDir>/src/utils/setupFrontendTests.js'
    ],
    testEnvironment: 'jsdom',
    testTimeout: 20000,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/utils/fileMock.js'
    },
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/dist/',
        '<rootDir>/src/utils/'
    ]
};