$(document).scroll(function() {

  $(".navbar").addClass("scrolled");

  if ($(document).scrollTop() < 200) {
    $(".navbar").removeClass("scrolled");
    $(".navbar").addClass("unscrolled");
  }

});


$(".btn").mouseover(function() {
  $(".header-arrow-icon").addClass("header-move-icon");
});

$(".btn").mouseout(function () {
  $(".header-arrow-icon").removeClass("header-move-icon");
});

$(".contact-section p").hover(function() {
  $(".contact-section p").addClass("contactAnimation");
});

$(".portfolio-section h2").hover(function() {
  $(".portfolio-section .carousel-images").addClass("portfolio-image-style");
});

$(".portfolio-section h2").mouseout(function() {
  $(".portfolio-section .carousel-images").removeClass("portfolio-image-style");
});

$(".contact-alert-button").on("click", function() {
  console.log("clciked")
  $(".contact-alert-message").addClass("contact-alert-message-display");
})
