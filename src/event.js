const App = (() => {
  $("#some-element").click(toggleMe);
  function toggleMe(e) {
    e.preventDefault();
    $(e.target).toggleClass("active");
  }
  return{
    toggleMe
  }
})();

module.exports=App;
