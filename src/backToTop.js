const $ = require("jquery");

const BackToTop = (function () {
  var baclTop = () => {
    $(".back").on("x.click", () => {
      $("html, body").animate({ scrollTop: "0" }, 1000);
    });
  };
  var animate = function () {
    $("html, body").animate({ scrollTop: "0" }, 1000);
  };
  function z() {
    var x = $(".se");
    x.siblings(".siblings").siblings(".siblings").toggleClass("hidden");
  }

  return {
    baclTop,
    animate,
    z,
  };
})();

module.exports = BackToTop;
