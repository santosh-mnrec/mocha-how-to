const { expect } = require("chai");
function debounce(targetFn, delay) {
  return function () {
    targetFn();
  };
}
function saveUser(user, callback) {
    $.post('/users', {
      first: user.firstname,
      last: user.lastname
    }, callback);
  }
function myFunction(condition, callback){
    if(condition){
      callback();
    }
  }
const sinon = require("sinon");
describe("sino", () => {
  it("x", () => {
    var stub = sinon.stub();
    stub.withArgs("hello").returns("foo");

    console.log(stub("hello", "world")); //output: 'foo'

    sinon.assert.calledWith(stub, "hello"); //no error

    // PROMIS

    var x = sinon.stub();
    x.yields("a", "b");
    const callback1 = (a) => {
      console.log(a);
    };
    const callback2 = (a) => {};
    //callback1 is called with 'a' and 'b'
    x(callback1, callback2);
  });
  it("should not run debounced function too early", function () {
    var clock = sinon.useFakeTimers();

    var delay = 100;
    var targetFn = sinon.spy();

    var delayedFn = debounce(targetFn, delay);

    delayedFn();
    clock.tick(delay - 1);

    clock.restore();
    sinon.assert.called(targetFn);

    var spy = sinon.spy();

    //We can call a spy like a function
    spy("Hello", "World");

    //Now we can get information about the call
    console.log(spy.firstCall.args); //output: ['Hello', 'World']

    var user = {
    
        setName: function(name){
          this.name = name;
        }
      }
      
      //Create a spy for the setName function
      var setNameSpy = sinon.spy(user, 'setName');
      
      //Now, any time we call the function, the spy logs information about it
      user.setName('Darth Vader');
      
      //Which we can see by looking at the spy object
      console.log(setNameSpy.callCount); //output: 1
      
      //Important final step - remove the spy
      setNameSpy.restore();
  });
  describe('myFunction', function() {
    it('should call the callback function', function() {
      var callback = sinon.spy();
  
      myFunction(true, callback);
  
      expect(callback.calledOnce).to.be.true;
    });
  });
});
describe('saveUser', function() {
    const $=require("../src/Jquery");
    it('should call callback after saving', function() {
  
      //We'll stub $.post so a request is not sent
      var post = sinon.stub($, 'post');
      post.yields();
  
      //We can use a spy as the callback so it's easy to verify
      var callback = sinon.spy();
  
      saveUser({ firstname: 'Han', lastname: 'Solo' }, callback);
  
      post.restore();
      sinon.assert.calledOnce(callback);
    });
});