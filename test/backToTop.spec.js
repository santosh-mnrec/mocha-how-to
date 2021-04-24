const proxyquire = require("proxyquire");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("Name of the group", () => {
  before(() => {
    this.clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    sinon.restore();
  });
  it("shoud called animate", (done) => {
    const siblingsStub = sinon.stub().returnsThis();
    const animateSub = sinon.stub();
    var onStub = siblingsStub.yields([]);
    $('body').append(`<div></div>`);
    const jqueryStub = sinon.stub().callsFake(() => {
      return {
        on: onStub,
        toggleClass: sinon.stub(),
        animate: animateSub,
      };
    });
    const { baclTop } = proxyquire("../src/backToTop", {
      jquery: jqueryStub,
    });
    $("html, body").animate({ scrollTop: "10" }, 1000);
    
    this.clock.tick(1000);
    baclTop();
    expect(animateSub.callCount).to.be.eq(1);
    expect($("html, body").scrollTop()).to.be.lte(10);
    done();
  });
  it("should called dummy method", () => {
    const siblingsStub = sinon.stub().returnsThis();
    const jqueryStub = sinon.stub().callsFake(() => {
      return {
        siblings: siblingsStub,
        toggleClass: sinon.stub(),
      };
    });
    const { dummy } = proxyquire("../src/backToTop", {
      jquery: jqueryStub,
    });

    dummy();
    expect(jqueryStub.called).to.be.true;
    expect(siblingsStub.callCount).to.be.eq(2);
  });
  it.skip("should call animate ", () => {
    const siblingsStub = sinon.stub().returnsThis();
    const animateSub = sinon.stub();
    var onStub = siblingsStub.yields([]);
    const jqueryStub = sinon.stub().callsFake(() => {
      return {
        on: onStub,
        toggleClass: sinon.stub(),
        animate: animateSub,
      };
    });

    const { baclTop } = proxyquire("../src/backToTop", {
      jquery: jqueryStub,
    });
    baclTop();
    expect(onStub.called).to.be.true;
    expect(onStub.callCount).to.be.eq(1);
    expect(animateSub.called).to.be.true;
  });
});
