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
})
