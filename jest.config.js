module.exports = {
  moduleFileExtensions: ["js", "ts"],
  rootDir: "./src",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  coverageDirectory: "./coverage",
  testEnvironment: "node"
};
