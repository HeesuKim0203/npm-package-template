/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    verbose: true,
    preset: 'ts-jest',
    transformIgnorePatterns : [ '<rootDir>/scripts/', '/scripts/' ]
}