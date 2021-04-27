const App = require("../src/event");
const sinon = require("sinon");
const assert = require("chai").assert;

describe("Name of the group", () => {
  it("a", () => {
    var div = document.createElement("div");
    var e = {
      target: div,
      preventDefault: sinon.spy(),
    };
    App.toggleMe(e);
    //Assert
    assert(e.preventDefault.called);
    assert(div.className == "active");
  });
  it("should call button click", () => {
    var e = {
      value: 11,
      target: document,
    };
    logSpy = sinon.spy(console, "log");
    App.buttonClick(e);

    sinon.assert.calledWith(logSpy, "Hello");
  });
});
