var main = function () {
  "use strict";

  $(".tabs a:nth-child(1)").on("click", function () {
    //make all tabs inactive
    $(".tabs span").removeClass("active");

    //make the first tab active
    $(".tabs a:nth-child(1) span").addClass("active");

    //empty the main content so that we can recreate it
    $("main .content").empty();

    //return false so that we dont follow the link
    return false;
  });

  $(".tabs a:nth-child(2)").on("click", function () {
    $(".tabs span").removeClass("active");
    $(".tabs a:nth-child(2) span").addClass("active");
    $("main .content").empty();
    return false;
  });

  $(".tabs a:nth-child(3)").on("click", function () {
    $(".tabs span").removeClass("active");
    $(".tabs a:nth-child(3) span").addClass("active");
    $("main .content").empty();
    return false;
  })
};

$(document).ready(main);
