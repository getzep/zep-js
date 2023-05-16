module.exports = {
   preset: "ts-jest/presets/default-esm",
   testEnvironment: "node",
   modulePathIgnorePatterns: ["dist/", "docs/"],
   testMatch: [
      "**/src/tests/**/*.ts?(x)", // include TypeScript test files in src/tests directory
      "!**/?(*.)+(spec|test).js", // exclude JavaScript files with spec or test suffix
   ],
   moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1",
   },
   transform: {
      "^.+\\.m?[tj]sx?$": ["ts-jest", { useESM: true }],
   },
   setupFiles: ["dotenv/config"],
   testTimeout: 20_000,
   transformIgnorePatterns: ["/node_modules/", "^.+\\.js$"],
};
