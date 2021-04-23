const $ = require("./Jquery");
const BackToTop = (function () {
  var baclTop = () => {
    $(".back").on("click", function () {
      $("html, body").animate({ scrollTop: "0" }, 1000);
    });
  };

  return {
    baclTop,
  };
})();

module.exports = BackToTop;
