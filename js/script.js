$(function () {
  $("nav>ul>li").on("mouseover focusin", function () {
    $(".sub").stop().fadeIn(300);
  });
  $("nav>ul>li").on("mouseout focusout", function () {
    $(".sub").stop().fadeOut(300);
  });

  $(".slide a:gt(0)").hide();
  setInterval(function () {
    $(".slide a:first").fadeOut().next("a").fadeIn().end().appendTo(".slide");
  }, 3000);

  $(".tabmenu>li").on("click", function () {
    $(".tabmenu>li").removeClass("on");
    $(this).addClass("on");
  });

  $(".popup01").click(function () {
    $(".popup").show();
  });
  $(".close").click(function () {
    $(".popup").hide();
  });
});
