const phoneNumberRegex = /^(\+212|0)(6|7|5)\d{8}$/;

function isNullValue(value) {
  return !value || value.trim() === ''
}

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

$('.submit-btn').on('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  
  $('#main-form').submit()
})

$('#main-form').on('submit', function (e) {
  e.preventDefault();

  $('.has-error').removeClass('has-error')

  const full_name = $(this).find('input[name="full_name"]').val(),
    phone = $(this).find('input[name="phone"]').val(),
    count = $(this).find('input[name="count"]').val(),
    address = $(this).find('input[name="address"]').val()
  let has_error = false

    if (isNullValue(full_name)) {
      $(this).find('input[name="full_name"]').addClass('has-error')
      has_error = true
    }

    if (isNullValue(phone)) {
      $(this).find('input[name="phone"]').addClass('has-error')
      has_error = true
    }

    if (!phoneNumberRegex.test(phone)) {
      $(this).find('input[name="phone"]').addClass('has-error')
      $(this).find('input[name="phone"] ~ .error').text('رقم الهاتف غير صحيح')
      has_error = true
    }

    if (isNullValue(address)) {
      $(this).find('input[name="address"]').addClass('has-error')
      has_error = true
    }

    if (has_error) return false;

    $.ajax({
      url: 'store.php',
      method: "POST",
      beforeSend: () => {
        $('.btn-text').hide()
        $('.submit-btn').prop('disabled', true)
        $('[role="status"]').removeClass('hidden')
      },
      data: {
        full_name, phone, address, count
      },
      success: r => {
        $('.btn-text').show()
        $('.submit-btn').prop('disabled', false)
        $('[role="status"]').addClass('hidden')

        r = JSON.parse(r)

        if (r.success) {
          $('#alert-success').show()
          $('.send-order-wrapper').remove()
          $('input').prop('disabled', true)
        }
      }
    })
})

$('input').on('keydown', function () {
  if (!isNullValue($(this).val())) {
    $(this).removeClass('has-error')
  }
})