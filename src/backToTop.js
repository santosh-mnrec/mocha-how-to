const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`...`);
var $ = require("jquery")(window);

const BackToTop = (function () {
  var initBackToTop = () => {
    BackToTop.animate();
    $(".sd-back-to-top").on("click.sdbacktotop",BackToTop.animate);
  };
  var animate = function () {
    $("html, body").animate({ scrollTop: "0" }, 1000);
  };

  return {
    initBackToTop,
    animate,
  };
})();
BackToTop.initBackToTop();
module.exports = BackToTop;
