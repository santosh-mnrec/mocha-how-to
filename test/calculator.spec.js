const expect = require("chai").expect;
const sinon = require("sinon");
const { calc } = require("../src/calculator");

var jsdom = require("jsdom");
$ = require("jquery")(new jsdom.JSDOM().window);
describe("Calculator", () => {
  it("should mock", () => {
    let mock = sinon.mock(calc);
    let expections = mock.expects("printHi");
    expections.exactly(1);
    expections.withArgs("Santosh");
    calc.sum(1, 2);
    expections.verify();
  });
  // it("should have called alert function", function () {
  //   var _savedAlert = window.alert;

  //   try {
  //     var spy = sinon.spy(window, "alert");
  //     $("#thingy").trigger("click");
  //     sinon.assert.called(spy);
  //   } finally {
  //     window.alert = _savedAlert;
  //   }
  // });
});
