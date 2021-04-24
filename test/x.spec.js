const proxyquire = require("proxyquire");
const sinon=require("sinon");


describe("myFunc", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should mock prop() method", () => {
    const el = {};
    const propStub = sinon.stub().returnsThis();
    const jqueryStub = sinon.stub().callsFake(() => {
      return {
        prop: propStub,
        on:sinon.stub()
      };
    });
    const { myFunc } = proxyquire("../src/x", {
      jquery: jqueryStub,
    });
    myFunc(el);
    expect(jqueryStub.calledWith(el)).to.be.true;
    expect(propStub.calledWith("tagName")).to.be.true;
  });
});
