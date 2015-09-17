var main = function (toDoObjects) {
  "use strict";

  var toDos = toDoObjects.map(function (toDo) {
    // return the description of this toDoObjects
    return toDo.description;
  });

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
        // THIS IS THE TAGS TAB CODE
        console.log("the tags tab was clicked!");
      }else if ($element.parent().is(":nth-child(4)")) {
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

$(document).ready(function () {
  $.getJSON("todos.json", function (toDoObjects) {
    main(toDoObjects);
  });
});
