$(document).ready(function() {

  $(window).scroll(function () {

      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 670) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 670) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });
});
$(".port1").click(function() {
    $('html, body').animate({
        scrollTop:   $("#problem").offset().top
    }, 1000);
});
$(".port2").click(function() {
    $('html, body').animate({
        scrollTop:   $("#solutions").offset().top
    }, 1000);
});
$("#bttn").click(function() {
    var x = document.getElementById("grade");
    if (x.style.display == "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});
