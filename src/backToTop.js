const $ = require("./Jquery");
const BackToTop = (function () {
  var baclTop = () => {
    $(".back").on("click", null);
  };
  var animate = function () {
    // console.log("calling animate");
    $("html, body").animate({ scrollTop: "0" }, 1000);
  };

  return {
    baclTop,
    animate,
  };
})();

module.exports = BackToTop;
