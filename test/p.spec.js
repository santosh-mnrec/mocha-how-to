const sinon = require("sinon");
const expect = require("chai").expect;
const $ = require("../src/Jquery");
const m = require("../src/p");
describe("a", function () {
  this.timeout(10000);
  before(() => {
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;

    const { document } = new JSDOM(
      "<html><div id='claimApiUrl'>test passes</div></html>"
    ).window;
    global.document = document;
  });
  afterEach(() => {
    sinon.restore();
    sinon.resetBehavior();
  });
  it("makes a GET request for todo items", async function () {
    const data = "teresa teng";
    const getJSONStub = sinon.stub($, "getJSON").resolves(data);
    const res = await m.getData();
    expect(res).to.be.equal("teresa teng");
    sinon.assert.calledOnce(getJSONStub);
  });
  it("makes a GET x for todo items", function (done) {
    const data = { xyz: 50, abc: 100 };
    const htmlSpy = sinon.spy(m, "_html");
    const mJqXHR = {
      done: sinon.stub().callsFake(function (callback) {
        callback(data);
        return this;
      }),
      fail: sinon.stub(),
    };
    const setColor = sinon.stub(m, "setColor");
    const getJSONStub = sinon.stub($, "getJSON").returns(mJqXHR);
    m._showProgressBars();
    sinon.assert.calledOnce(getJSONStub);
    sinon.assert.calledWithExactly(mJqXHR.done, sinon.match.func);
    expect(htmlSpy.called).to.be.true;
    expect(setColor.callCount).to.be.eq(2);
    done();
  });
  it("x", () => {
    const show = sinon.stub();
    const hide = sinon.stub();
    var elStub = {
      id: "foo",
      find: sinon.stub().callsFake(() => {
        return {
          css: sinon.stub(),
          hide: hide,
          show: show,
        };
      }),
    };
    m.setColor(100, elStub);
    expect(show.called).to.be.true;
  });
  it("adds correct class", function () {
    var parent = {
      querySelectorAll: sinon.stub(),
    };
    var elStub = {
      classList: {
        add: sinon.stub(),
      },
    };
    parent.querySelectorAll.returns([elStub]);
    var expectedClass = "hello-world";

    m.applyClass(parent, expectedClass);

    sinon.assert.calledWith(elStub.classList.add, expectedClass);
  });
  it("x", () => {
    var getEls = sinon.stub(document.body, "getElementsByTagName");
    var fakeDiv = {
      getAttribute: sinon.stub(),
    };
    getEls.withArgs("div").returns([fakeDiv]);
    var x=document.body.getElementsByTagName('div')[0].getAttribute('data-example')
    x//?
  });
});
