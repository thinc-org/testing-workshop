module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
}
