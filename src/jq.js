const $ = require("jquery");
module.exports = {
  doStuff: function () {
    $("body").append('<div class="some-module"></div>');
  },
  test: function () {
    var categoryVal = $("#category").val();
    console.log(categoryVal);
    if (categoryVal === "") {
      this.doSomething();
    }
  },
  doSomething: function () {
    console.log("Hello");
  },
};
