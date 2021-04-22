
  let claimApi = document.getElementById("claimApiUrl")?.value || "";
  var progressBars = (() => {
    var getData = () => {
      return $.getJSON(claimApi);
    };
    const progressBarIndicator = ".sd-ps-claim-progress-bar-indicator";
    const progressBarClaimPercent = ".sd-ps-claim-percent";
    const progressBarText = ".progressbar-text";
    const progressBarValue = ".progressbar-value";
    const sdClaimedPct = ".sd-ps-claimed-pct";
    const toolTipId = ".ps-tool-tip";
    const defaultText = ".sd-ps-claim-default-text";
    var dataCount = 0;
    var _html = function (data) {
      if (data === "undefined") {
        return;
      }
      for (let key in data) {
        let percentage = data[key];
        let masterId = key;
        let $pb = $(".pb-" + masterId);
        $pb
          .find(progressBarText)
          .css("width", percentage + "%")
          .show(0);
        $pb.find(progressBarValue).text(percentage);
        let color = percentage >= 75 ? "#EE6411" : "#444444";
        $pb.find(progressBarText).css("background-color", color);
        if (percentage === 100) {
          $pb.find(sdClaimedPct).hide();
          $pb.find(toolTipId).show();
        }
        $pb.parent().show();
        $pb.find(progressBarIndicator).css("display", "block");
        $pb.find(progressBarClaimPercent).css("display", "block");
        $pb.find(defaultText).css("display", "none");

        dataCount++;
        if (dataCount === Object.keys(data).length) {
          // trigger resize so product stack heights will adjust
          var event = document.createEvent("HTMLEvents");
          event.initEvent("resize", true, false);
          document.dispatchEvent(event);
        }
      }
    };
    var _showProgressBars = () => {
      getData()
        .done(function (data) {
            progressBars._html(data);
        })
        .fail(function (e) {
          console.log("error getting reservations.", e);
        });
    };

    var init = () => {
    //   if (!claimApi) {
    //     return;
    //   }
      progressBars._showProgressBars();
    };

    return {
      init: init,
      getData: getData,
      _showProgressBars,
      _html
    };
  })();

module.exports=progressBars;