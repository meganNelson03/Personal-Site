$(document).scroll(function() {

  $(".navbar").addClass("scrolled");

  if ($(document).scrollTop() < 200) {
    $(".navbar").removeClass("scrolled");
    $(".navbar").addClass("unscrolled");
  }

});


$(".btn").mouseover(function() {
  $(".fas").addClass("animated");
});

$(".btn").mouseout(function () {
  $(".fas").removeClass("animated");
});

$(".contact-section p").hover(function() {
  $(".contact-section p").addClass("contactAnimation");
});

$(".portfolio-section h2").hover(function() {
  $(".portfolio-section .carousel-images").addClass("img-style");
});

$(".portfolio-section h2").mouseout(function() {
  $(".portfolio-section .carousel-images").removeClass("img-style");
});
