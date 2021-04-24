const $=require("jquery");

// function z() {
//   $;
//   var x=$('.se')
//   x.siblings(".siblings").siblings(".siblings").toggleClass("hidden");
// }

// module.exports = { z };
console.log($);
const BackToTop = (function () {
  var baclTop = () => {
    console.log($(".back"));
    $(".back").on("click", animate);
  };
  var animate = function () {
    $("html, body").animate({ scrollTop: "0" }, 1000);
  };
  function z() {
  
  var x=$('.se')
  x.siblings(".siblings").siblings(".siblings").toggleClass("hidden");
}

  return {
    baclTop,
    animate,
    z
  };
})();

module.exports = BackToTop;