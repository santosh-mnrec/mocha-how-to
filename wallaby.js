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

      const chai = require("chai");
      const sinon = require("sinon");

      chai.use(require("sinon-chai"));

      // setup sinon hooks
      mocha.suite.beforeEach("sinon before", function () {
        const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
        const { window } = new JSDOM();
        const { document } = new JSDOM("<h1>test passes</h1>").window;
        global.document = document;

        const $ = require("jquery")(window);
        global.$=$;

        if (null == this.sinon) {
          this.sinon = sinon.createSandbox();
        }
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
    externals: { jQuery: "jQuery" },
    workers: { recycle: true },
  };
};
