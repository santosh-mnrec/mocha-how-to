// const { once, getTodos, debounce, updateUI } = require("../src/playground");
// const sinon = require("sinon");
// const assert = require("chai").assert;
// const { expect } = require("chai");
// let xhr, requests;
// var clock;
// describe("Name of the group", function () {
//   before(function () {
//     clock = sinon.useFakeTimers();
//     xhr = sinon.useFakeXMLHttpRequest();
//     requests = [];
//     xhr.onCreate = function (req) {
//       requests.push(req);
//     };
//   });
//   it.skip("makes a GET request for todo items2", function () {
//     getTodos(42, sinon.fake());

//     // assert.equal(requests.length, 1);
//     assert.match(requests[0].url, "/todo/42/items");
//   });
//   it("calls the original function", function () {
//     var callback = sinon.fake();
//     var proxy = once(callback);

//     proxy();

//     assert(callback.called);
//     assert(callback.calledOnce);
//   });
//   it("calls the original function2", function () {
//     var callback = sinon.fake();
//     var proxy = once(callback);

//     var obj = {};

//     proxy.call(obj, 1, 2, 3);
//     proxy();

//     assert(callback.calledOn(obj));
//     assert(callback.calledWith(1, 2, 3));
//   });
//   it("should return value", () => {
//     var callback = sinon.fake.returns(42);
//     var proxy = once(callback);

//     assert.equal(proxy(), 42);
//   });
//   after(function () {
//     sinon.restore();
//   });

//   it.skip("makes a GET request for todo items", function () {
//     sinon.replace($.fn, "ajax", sinon.fake());
//     getTodos(42, sinon.fake());
//     assert($.ajax.calledWithMatch({ url: "/todo/42/items" }));
//   });
//   it("calls callback after 100ms", function () {
//     var callback = sinon.fake();
//     var throttled = debounce(callback);

//     throttled();

//     clock.tick(99);
//     assert(callback.notCalled);

//     clock.tick(1);
//     assert(callback.calledOnce);

//     // Also:
//     // assert.equals(new Date().getTime(), 100);
//   });
//   it("update", () => {
//     var jQueryShow = sinon.stub($.fn, "show");
//     var jQueryHide = sinon.spy($.fn, "hide");

//     updateUI();
    
//     jQueryHide//?
//     expect(jQueryShow.callCount).to.be.eq(1);
//    // expect(jQueryShow.thisValues[0].selector).to.be.true;
//  jQueryHide.calledOnceWith//??
//     expect(jQueryHide.callCount).to.be.eq(1);
//   });
//   it("p", () => {
//     var spy = sinon.spy($.prototype, "append");
//     var $div = $("<div></div>");

//     $("body").append($div).append($div).append($div).append($div);

//     expect(spy.withArgs($div).callCount).to.eq(4);
//   });
// });
