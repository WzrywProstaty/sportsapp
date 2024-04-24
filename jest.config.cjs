/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {},
  transformIgnorePatterns: [
    "/node_modules/(?!MODULE_NAME_HERE).+\\.js$",
    "/node_modules/(?!MODULE_NAME_HERE).+\\.tss$"
  ]
};