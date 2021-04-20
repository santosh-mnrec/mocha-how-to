const {user}=require("../src/user");
const sinon=require("sinon");
const expect=require("chai").expect;
const { use } = require("chai");
describe('User', () => {
    beforeEach(function(){
        sinon.resetBehavior();

    });
    it('should call gree',function(){
        let msg=user.greet("santosh");
        expect(msg).to.be.equal("Hello santosh");
    })
    it('ff',function(){
        const stub=sinon.stub(user,"greet");
        stub.withArgs('World').returns("Good Bye!");
        let msg=user.greetMessage("World");
        expect(msg).to.be.equal("Good Bye!"); 
    })
 
      it('ajax',async function(){
        const output={"id":1};
        const stub=sinon.stub(user,"getUserDateById"); 
        stub.withArgs().returns(Promise.resolve(output));
        var a=await user.getUserDateById(2);
        expect(a.id).to.be.equal(1);
    })
});