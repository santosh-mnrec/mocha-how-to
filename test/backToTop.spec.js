const jsdom = require("jsdom");
const sinon = require("sinon");
const expect = require("chai").expect;
const proxyquire = require("proxyquire");
const BackToTop = require("../src/backToTop");

describe("Name of the group", () => {
  before(() => {
    const html =
      '<!doctype html><html><head><meta charset="utf-8">' +
      "</head><body><div class='back'></div></body></html>";

    const document = new jsdom.JSDOM(html);
    const window = document.window;

    require("jquery")(window);
    global.document = window.document;
    global.window = window;
  });
  afterEach(() => {
    sinon.restore();
  });
  it("should ", (done) => {
    const animateSpy = sinon.spy();
    $(".back").on("click", animateSpy);

    var log = sinon.spy(console, "log");
    var bt = sinon.stub(BackToTop, "baclTop").callsFake(() => {
      animateSpy();
    });

    BackToTop.baclTop();

    expect(bt.callCount).to.be.eq(1);
    expect(animateSpy.callCount).to.be.eq(2);
    //expect(log.callCount).to.be.eq(1);
    done();
  });
});
