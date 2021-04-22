const App = require("../src/product-stack-counter");
const sinon = require("sinon");
const expect = require("chai").expect;
const { fail } = require("should");
describe("Product Stack", () => {
  it("should ", (done) => {
    var json = {
      photos: {
        page: 1,
        pages: 726,
        perpage: 5,
        total: "3630",
        photo: [
          {
            id: "8591804280",
            owner: "77921082@N00",
            secret: "da96195b4b",
            server: "8526",
            farm: 9,
            title: "Pod",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: "8591810388",
            owner: "77921082@N00",
            secret: "d94ce346a5",
            server: "8509",
            farm: 9,
            title: "Street Plate",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: "8591801040",
            owner: "77921082@N00",
            secret: "cb7b1e246a",
            server: "8097",
            farm: 9,
            title: "Stone pod",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: "8590414659",
            owner: "77921082@N00",
            secret: "fb49a25607",
            server: "8094",
            farm: 9,
            title: "Street pole",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
          {
            id: "8590411479",
            owner: "77921082@N00",
            secret: "9aab17d3a9",
            server: "8370",
            farm: 9,
            title: "Street plate",
            ispublic: 1,
            isfriend: 0,
            isfamily: 0,
          },
        ],
      },
      stat: "ok",
    };
    var callbackSpy = sinon.spy(App, "_html");
    sinon
      .stub(App, "getData")
      .returns({
        done: sinon.stub().calledWith(callbackSpy(json)),
        fail: sinon.stub().withArgs().returns([]),
      });
    const stub = sinon.stub(App, "_showProgressBars");
    //const stub2 = sinon.stub(App, "_html");
   // stub2.withArgs().returns([]);
    stub.withArgs().returns(Promise.resolve({ id: 1 }));
    App.init();
    expect(stub.called).to.be.true;
    expect(callbackSpy.args.length>0).to.be.true;
    done();
  });
});
