const $ = require("../src/Jquery");
const dc = require("../src/dc");
const sinon = require("sinon");
const expect = require("chai").expect;

describe("Test", () => {
  afterEach(() => {
    sinon.restore();
  });
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
    const dom = [
      {
        getAttribute: sinon.stub().returns(() => {}),
      },
      {
        getAttribute: sinon.stub().returns(() => {}),
      },
    ];
    var now = new Date();
    sinon.stub($.fn, "find").returns(dom);

    var clock = sinon.useFakeTimers(now.getTime());
    var stub = sinon.stub(dc, "loop");

    dc.updateDealTime();
    expect(stub.called).to.be.true;
    //assertions
    clock.restore();
  });
  it("sfdsf", () => {
    this.clock = sinon.useFakeTimers();
    //var helper = new state.HELPER();
    var mySpy = sinon.spy(dc, "updateDealTime");

    setInterval(() => {
      mySpy();
      mySpy();
    }, 1000);
    this.clock.tick(999);
    expect(mySpy.called).to.be.false;
    this.clock.tick(1000);
    expect(mySpy.called).to.be.true;

    expect(mySpy.callCount).to.be.eq(2);
  });
  it("x", () => {
    expect(dc.loop).to.be.not.undefined;
  });
  it("loop", () => {
    clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
  

    const attribute=sinon.stub().callsFake((selector)=>{
          if(selector==="data-deal-end-time")
            return new Date();
          else if(selector==="data-hour-countdown")
          return 12;
          else if(selector==="data-deal-id")
            return 1;
          else 
            return sinon.stub();

    });
  
    const dom = [
      {
        getAttribute: attribute
      }
    ];

    sinon.stub($.fn, "find").returns(dom);
    clock = sinon.useFakeTimers({
      now: new Date(2019, 1, 1, 0, 0),
      shouldAdvanceTime: true,
      advanceTimeDelta: 0
  });

    var stub = sinon.stub(dc, "dealTimer");
    dc.updateDealTime();
    dc.loop(false,$(".deal-countdown-timer"),clock)
    //expect(stub.called).to.be.true;
    //assertions
    clock.restore();
  });
});
