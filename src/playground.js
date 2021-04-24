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
  function getTodos(listId, callback) {
    $.ajax({
      url: "/todo/" + listId + "/items",
      success: function (data) {
        // Node-style CPS: callback(err, data)
        callback(null, data);
      },
    });
  }
  module.exports={once,getTodos}