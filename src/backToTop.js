const $=require("./Jquery");
const BackToTop = (function () {
  var baclTop = () => {
    $(".back").on("click", animate);
  };
  var animate = function () {
    $("html, body").animate({ scrollTop: "0" }, 1000);
  };

  return {
    baclTop,
    animate,
  };
})();

module.exports = BackToTop;
