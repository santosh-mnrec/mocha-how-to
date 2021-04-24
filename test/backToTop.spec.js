const proxyquire = require("proxyquire");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("Name of the group", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("x", () => {
    const siblingsStub = sinon.stub().returnsThis();
    const jqueryStub = sinon.stub().callsFake(() => {
      return {
        siblings: siblingsStub,
        toggleClass: sinon.stub(),
      };
    });
    const { z } = proxyquire("../src/backToTop", {
      jquery: jqueryStub,
    });

    z();
    expect(jqueryStub.called).to.be.true;
    expect(siblingsStub.callCount).to.be.eq(2);
  });
  it("should ", () => {
   

    const siblingsStub = sinon.stub().returnsThis();
    const animateSub = sinon.stub();
    var x=siblingsStub.yields([]);
  var spy=sinon.spy();
    const jqueryStub = sinon.stub().callsFake(() => {
      return {
        on: x,
        toggleClass: sinon.stub().returnsThis(),
        animate: animateSub.returnsThis()
      };
    });


    const { baclTop,animate } = proxyquire("../src/backToTop", {
      jquery: jqueryStub,
    });
    baclTop();
    expect(x.called).to.be.true;
    expect(x.callCount).to.be.eq(2);
    //expect(spy.called).to.be.true;
  });
});
