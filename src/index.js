 class MyClass {
    constructor(htmlElement) {
      this.clientWebsiteHTMLElement = htmlElement;
      this.addChild();
    }
  
    addChild() {
      let child = document.createElement('div');
      this.clientWebsiteHTMLElement.appendChild(child);
    }
  }
  module.exports=MyClass;
  