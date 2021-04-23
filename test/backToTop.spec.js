const jsdom = require("jsdom");
const sinon = require("sinon");
const expect = require("chai").expect;
const proxyquire = require("proxyquire");

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
    // const onStub = sinon.stub().callsFake((handler) => handler());
    // const jqueryStub = { on: onStub };
    // const $ = sinon.stub().callsFake(() => jqueryStub);

    // $.withArgs(".back").returns(onStub);
    // const BackToTop = proxyquire("../src/backToTop", { jQuery: $ });

    const b=sinon.mock("../src/backToTop");
    
    b.expects('saveRemainLoggedInPreference').once().withArgs(true);
    //expect(onStub.callCount).to.be.eq(1);

    done();
  });
});
