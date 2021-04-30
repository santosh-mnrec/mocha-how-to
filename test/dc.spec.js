const $=require("../src/Jquery");
const dc = require("../src/dc");
const sinon = require("sinon");
const expect = require("chai").expect;



describe("Test", () => {
    afterEach(()=>{
        sinon.restore();
    })
    before(() => {
        const jsdom = require("jsdom");
        const { JSDOM } = jsdom;
    
        const { document } = new JSDOM(
          "<html><div class='deal-countdown-timer'>test passes</div></html>"
        ).window;
        global.document = document;
      });
  it("hideDealTimer", () => {
    expect(dc.hideDealTimer).to.be.not.undefined;
  });
  it("dealTimer", () => {
    expect(dc.dealTimer).to.be.not.undefined;
  });
  it("updateDealTime", () => {
    expect(dc.updateDealTime).to.be.not.undefined;
  });
  it("updateDealTimex", () => {
    const dom=[{
        getAttribute:sinon.stub().returns(()=>{})
    },
    {
        getAttribute:sinon.stub().returns(()=>{})
    }
];
    var now = new Date();
    sinon.stub($.fn, 'find').returns(dom)

    var clock = sinon.useFakeTimers(now.getTime());
    var stub = sinon.stub(dc, "loop");
   
    dc.updateDealTime();
    expect(stub.called).to.be.true;
    //assertions
    clock.restore();
  });
});
