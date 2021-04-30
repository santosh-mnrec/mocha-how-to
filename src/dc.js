const $ = require("../src/Jquery");

const CountDown = (function () {
  var firstUpdate = true;
  var updateDealTime = () => {
    var $dealTimers = $(".deal-countdown-timer");
    
    $dealTimers.length; //?
    if ($dealTimers.length < 1) {
      clearInterval(dealCountDownInterval);
      return;
    }

    var timeNow = new Date().getTime();
   
    var utcOffSet = new Date().getTimezoneOffset();
    var utcTimeNow = new Date(timeNow + utcOffSet * 60 * 1000).getTime();
    obj.loop(firstUpdate, $dealTimers, utcTimeNow);
  };
  function loop(firstUpdate, $dealTimers, utcTimeNow) {
    new Date(utcTimeNow)//?
    
    for (var i = 0; i < $dealTimers.length; i++) {
      var dealEndDateUTC = $dealTimers[i].getAttribute("data-deal-end-time");
      dealEndDateUTC//?
      var dealCountDownHours = $dealTimers[i].getAttribute(
        "data-hour-countdown"
      );
      dealCountDownHours//?
      var dealId = $dealTimers[i].getAttribute("data-deal-id");

      var dealEndTimeUTC = new Date(dealEndDateUTC).getTime();
      var remainingTime = dealEndTimeUTC - utcTimeNow;
      var remainingHours = Math.floor((remainingTime % (36e5 * 24)) / 36e5);
dealEndDateUTC//?
      if (dealEndTimeUTC > 0 && dealCountDownHours >= remainingHours) {
        if (remainingTime < 0) {
          hideDealTimer(dealId);
          continue;
        }
        obj.dealTimer($dealTimers[i], remainingTime);
      }

      if (firstUpdate && i === $dealTimers.length - 1) {
        firstUpdate = false;
        // trigger resize so product stack heights will adjust
        var event = document.createEvent("HTMLEvents");
        event.initEvent("resize", true, false);
        document.dispatchEvent(event);
      }
    }
  }
  function hideDealTimer(dealId) {
   // $(".sd-ps-claim-countdown-" + dealId).hide();
  }

  function dealTimer(dealTimerObject, timeValue) {
    $(dealTimerObject).css("display", "inline").parent().show();

    var ddaysStart = Math.floor(timeValue / (36e5 * 24));
    var dhoursStart = Math.floor((timeValue % (36e5 * 24)) / 36e5);
    var dminutesStart = Math.floor((timeValue % 36e5) / (1e3 * 60));
    var dsecondsStart = Math.floor((timeValue % (1e3 * 60)) / 1e3);

    if (ddaysStart < 10) {
      ddaysStart = "0" + ddaysStart;
    }

    if (dhoursStart < 10) {
      dhoursStart = "0" + dhoursStart;
    }

    if (dminutesStart < 10) {
      dminutesStart = "0" + dminutesStart;
    }

    if (dsecondsStart < 10) {
      dsecondsStart = "0" + dsecondsStart;
    }

    obj.dealTimerMarkup(dealTimerObject);
  }
  function dealTimerMarkup(dealTimerObject) {
    var countDownEndsLabel = $("#dealTimerEndLabel").val();
    var countDownDaysLabel = $("#dealTimerDaysLabel").val();
    var countDownHoursLabel = $("#dealTimerHoursLabel").val();
    var countDownMinutesLabel = $("#dealTimerMinutesLabel").val();
    var countDownSecondsLabel = $("#dealTimerSecondsLabel").val();
    $(dealTimerObject).html(
      "<span>" +
        countDownEndsLabel +
        " " +
        ddaysStart +
        countDownDaysLabel +
        " " +
        dhoursStart +
        countDownHoursLabel +
        " " +
        dminutesStart +
        countDownMinutesLabel +
        " " +
        dsecondsStart +
        countDownSecondsLabel +
        " " +
        "</span>"
    );

    if ($(dealTimerObject).text().indexOf("00d ") > -1) {
      $(dealTimerObject).text($(dealTimerObject).text().replace("00d ", ""));
      if ($(dealTimerObject).text().indexOf("00h ") > -1) {
        $(dealTimerObject).text($(dealTimerObject).text().replace("00h ", ""));
        if ($(dealTimerObject).text().indexOf("00m ") > -1) {
          $(dealTimerObject).text(
            $(dealTimerObject).text().replace("00m ", "")
          );
        }
      }
    }
  }
  var dealCountDownInterval = setInterval(updateDealTime, 1000);

  const obj = {
    updateDealTime,
    dealCountDownInterval,
    hideDealTimer,
    dealTimer,
    dealTimerMarkup,
    loop,
  };

  return obj;
})();
module.exports = CountDown;
