function once(fn) {
    var returnValue,
      called = false;
    return function () {
      if (!called) {
        called = true;
        returnValue = fn.apply(this, arguments);
      }
      return returnValue;
    };
  }
  var updateUI = function() {
    var x=$('#x').show//??
    $('#login').show();
    $('#logout').hide();
  };
  function debounce(callback) {
    var timer;
    return function () {
      clearTimeout(timer);
      var args = [].slice.call(arguments);
      timer = setTimeout(function () {
        callback.apply(this, args);
      }, 100);
    };
  }
  function getTodos(listId, callback) {
    $.ajax({
      url: "/todo/" + listId + "/items",
      success: function (data) {
        // Node-style CPS: callback(err, data)
        callback(null, data);
      },
    });
  }
  module.exports={once,getTodos,debounce,updateUI}