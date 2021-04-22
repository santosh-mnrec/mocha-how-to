const { JSDOM } = require("jsdom");
const jquery = require("jquery");
const fs = require("fs");

global.chai = require("chai");
global.should = global.chai.should();

global.chai.use(global.chaiAsPromised);
global.assert = require("assert");
global.sinon = require("sinon");
global.expect = global.chai.expect;

global.jsDom.window.globalVariable = true;

global.jsDom.window.$ = jquery(global.jsDom.window);
global.$ = global.jsDom.window.$;
global.window = global.jsDom.window;
