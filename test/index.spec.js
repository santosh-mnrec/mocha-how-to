var expect = require('chai').expect;
const JSDOM=require("jsdom").JSDOM;
const MyClass=require("../src/index");
const dom = new JSDOM('<!DOCTYPE html><html><head></head><div id="root"></div><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;
describe('My class', () => {
  it('adds an element to the HTML element passed to its constructur', () => {
    const htmlElement = document.getElementById('root');
    const myClass = new MyClass(htmlElement);
    expect(htmlElement.children.length).to.equal(1);
  });
  
});
