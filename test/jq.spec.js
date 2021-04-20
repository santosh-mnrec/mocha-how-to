var should = require("should"),
  assert = require("assert"),
  jsdom = require("jsdom");
const $ = require("jquery");
const sinon = require("sinon");

var someModule = require("../src/jq");

describe("someModule", function () {
  // create some jsdom magic to allow jQuery to work
  // var doc = new jsdom.JSDOM('<div class="some-module"></div>'),
  //   $ = (global.jQuery = require("jquery"));

  it("does stuff", function () {
    someModule.doStuff();
    $("div.some-module").length.should.equal(1);
  });
  it("x", (done) => {
    var spy = sinon.spy($.prototype, "append");
    var $div = $("<div></div>");

    $("body").append($div).append($div).append($div).append($div);

    console.assert(spy.withArgs($div).callCount == 4);
    done();
  });
});
