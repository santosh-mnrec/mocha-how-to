const $ = require("../src/Jquery");
const Progress = (() => {
  const getData = () => {
    return $.getJSON();
  };
  const showProgressBars = () => {
    getData()
      .done(function (data) {
        console.log(data);
      })
      .fail(function (e) {
        console.log("error getting data.", e);
      });
  };
  return {
    getData,
    showProgressBars,
  };
})();
module.exports = Progress;
