const $ = require("./Jquery");
const App = (() => {
  $("#some-element").click(toggleMe);
  document.addEventListener("click",buttonClick);
  function toggleMe(e) {
    e.preventDefault();
    $(e.target).toggleClass("active");
  }
  function buttonClick(e) {
    e;
      if(e.value>10){
        console.log("Hello");
      }else{
        console.log("bye");
      }
  }
  return{
    toggleMe,buttonClick
  }
})();

module.exports=App;
