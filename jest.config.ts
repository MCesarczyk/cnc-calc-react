/* eslint-disable import/no-anonymous-default-export */

export default {
  preset: 'ts-jest',
  "roots": [
    "<rootDir>",
    "<rootDir>/src"
  ],
  "modulePaths": [
    "<rootDir>",
    "<rootDir>/src"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.svg$": "<rootDir>/src/svgMock.jsx"
    // process `*.tsx` files with `ts-jest`
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
}