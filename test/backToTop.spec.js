const proxyquire = require("proxyquire");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("Name of the group", () => {
  afterEach(() => {
    sinon.restore();
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
  it("should call animate ", () => {
    const siblingsStub = sinon.stub().returnsThis();
    const animateSub = sinon.stub();
    var onStub= siblingsStub.yields([]);
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
