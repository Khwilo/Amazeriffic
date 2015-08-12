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
    // create a temporary jQuery version variable
    var $element = $(element);

    // create a click handler for the element
    $(element).on("click", function (){
      // declare the DOM elements
      var $content, $input, $button, i;

      $(".tabs a span").removeClass("active");
      $element.addClass("active");
      $("main .content").empty();

      if ($element.parent().is(":nth-child(1)")) {
        // display newer items first
        $content = $("<ul>");
        for (i = toDos.length-1; i >= 0; i--) {
          $content.append($("<li>").text(toDos[i]));
        }
      }else if ($element.parent().is(":nth-child(2)")) {
        // display older items first
        $content = $("<ul>");
        toDos.forEach(function (todo){
          $content.append($("<li>").text(todo));
        });
      }else if ($element.parent().is(":nth-child(3)")) {
        // add a new item
        $input = $("<input>");
        $button = $("<button>").text("+");

        $button.on("click", function (){
          if ($input.val() !== "") {
            toDos.push($input.val());
            $input.val("");
          }
        });

        $content = $("<div>").append($input, $button);
      }

      $("main .content").append($content);

      return false;
    })
  });

  $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);
