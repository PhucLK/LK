
$(document).ready(() => {
  //find if window width less than 500px then remove class
  let lastWidth = $(window).width();
  $(window).resize(function () {
    if ($(window).width() != lastWidth) {

      lastWidth = $(window).width();

      if (lastWidth < 500) {
        $(".carousel-infor").hide();
      } else {
        $(".carousel-infor").show();
      }
    }
  });

  //if user scroll page to bottom > 240px then show button scroll to top in 800 milisecon
  $(window).scroll(function () {
    if ($(this).scrollTop() > 240) {
      $('#myBtn').show();
    }
    else {
      $('#myBtn').hide();
    }
  });

  $('#myBtn').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $('.circle').on('mouseover', function () {
    $(this).css("width", "12rem");
    return false;
  });

  $('.circle').on('mouseout', function () {
    $(this).css("width", "10rem");
    return false;
  });
});