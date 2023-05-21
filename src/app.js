$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});

$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
});

$("[data-count]").on("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  const input = $('[name="count"]');
  const display = $(".count");

  let count = parseInt(input.val());

  switch ($(this).data("count")) {
    case "plus":
      input.val(count + 1);
      display.text(count + 1);
      break;
    case "minus":
      if (count - 1 > 0) {
        input.val(count - 1);
        display.text(count - 1);
      }
      break;
  }
});
