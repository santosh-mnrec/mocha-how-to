const FooService = require("../src/foo").FooService;
const sinon = require("sinon");
describe("Foo", () => {
  it("invokes the database", async function () {
    const subject = new FooService();
  
    sinon.spy(subject.db, "where");

    await subject.getFoo(1234);
    const dbArgs = db.where.getCall(0).args[0];
    expect(dbArgs.id).to.eql(1234);
  });
});
