const BackToTop = require("../src/backToTop");
const sinon = require("sinon");
const jsdom = require('jsdom')
const document = new jsdom.JSDOM('<html></html>', {})
const window = document.defaultView
global.document = document
global.window = window

const { expect } = require("chai");

describe("Name of the group", () => {
  it("should ", () => {
    const operation = sinon.spy(BackToTop,"animate");
    
    BackToTop.initBackToTop();

    $(".sd-back-to-top").on('click',operation);
    expect(operation.called);
    console.log(operation.callCount);
 
  });
});
