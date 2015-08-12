var main = function () {
  "use strict";

  var toDos = [
    "Learn Ruby on Rails",
    "Go to JKUAT",
    "Buy soccer boots",
    "Visit friends",
    "Practice for the church concert",
    "Head for a road trip"
  ];

  $(".tabs a span").toArray().forEach(function (element){
    // create a click handler for the event
    $(element).on("click", function (){
      // create a temporary jQuery version variable
      var $element = $(element), $content;

      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")) {
        console.log("FIRST TAB IS CLICKED!");
      }else if ($element.parent().is(":nth-child(2)")) {
        $content = $("<ul>");
        toDos.forEach(function (todo){
          $content.append($("<li>").text(todo));
        });
        $("main .content").append($content);
      }else if ($element.parent().is(":nth-child(3)")) {
        console.log("THIRD TAB IS CLICKED");
      }
      return false;
    })
  });
};

$(document).ready(main);
