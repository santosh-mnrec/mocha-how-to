const { once,getTodos } = require("../src/playground");
const sinon = require("sinon");
const assert = require("chai").assert;

describe("Name of the group", () => {
  it("calls the original function", function () {
    var callback = sinon.fake();
    var proxy = once(callback);

    proxy();

    assert(callback.called);
    assert(callback.calledOnce);
  });
  it("calls the original function2", function () {
    var callback = sinon.fake();
    var proxy = once(callback);

    var obj = {};

    proxy.call(obj, 1, 2, 3);
    proxy();

    assert(callback.calledOn(obj));
    assert(callback.calledWith(1, 2, 3));
  });
  it("should return value", () => {
    var callback = sinon.fake.returns(42);
    var proxy = once(callback);

    assert.equal(proxy(), 42);
  });
  after(function () {
    sinon.restore();
  });
  
  it("makes a GET request for todo items", function () {
    sinon.replace($, "ajax", sinon.fake());
    getTodos(42, sinon.fake());
    assert($.ajax.calledWithMatch({ url: "/todo/42/items" }));
  });
});
