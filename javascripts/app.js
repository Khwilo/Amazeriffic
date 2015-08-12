var main = function () {
  "use strict";

  $(".tabs a span").toArray().forEach(function (element){
    // create a click handler for the event
    $(element).on("click", function (){
      // create a temporary jQuery version variable
      var $element = $(element);

      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")) {
        console.log("FIRST TAB IS CLICKED!");
      }else if ($element.parent().is(":nth-child(2)")) {
        console.log("SECOND TAB IS CLICKED");
      }else if ($element.parent().is(":nth-child(3)")) {
        console.log("THIRD TAB IS CLICKED");
      }
      return false;
    })
  });
};

$(document).ready(main);
