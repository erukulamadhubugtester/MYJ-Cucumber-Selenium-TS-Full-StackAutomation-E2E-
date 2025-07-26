module.exports = {
  default: {
    require: ["./src/stepDefinitions/**/*.ts", "./src/support/*.ts"],
    paths: ["./features/**/*.feature"],
    format: ["html:reports/cucumber-report.html"],
    parallel: 1,
    publishQuiet: true,
    requireModule: ["ts-node/register"],
    worldParameters: {
      browser: "chrome",
      timeout: 30000,
    },
  },
};
