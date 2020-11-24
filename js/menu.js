$(document).ready(() => {
  $(".activate").on("click", () => {
    $(".item").css("display", "block");
    $(".item").animate({
      left: 0,
    });
  });
  $(".exit").on("click", () => {
    $(".item").animate({
      left: "-100%",
    });
  });
});
