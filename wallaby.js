module.exports = function () {
  return {
    files: [
      { pattern: "node_modules/jquery/dist/jquery.js", instrument: false },
      "src/**/*.js",
      "!src/**/*.spec.js",
    ],

    tests: ["test/**/*.spec.js"],

    setup: (wallaby) => {
      const mocha = wallaby.testFramework;
      require("C:/Poc and Personal/Mocha/setup.js")
      // setup sinon hooks
      mocha.suite.beforeEach("sinon before", function () {
        
      });
      mocha.suite.afterEach("sinon after", function () {
        if (this.sinon && "function" === typeof this.sinon.restore) {
          this.sinon.restore();
        }
      });

      global.expect = require("chai").expect;
    },

    testFramework: "mocha",

    env: {
      type: "node",
      runner: "node",
    },
    externals: { jquery: "jquery" },
    workers: { recycle: true },
  };
};
