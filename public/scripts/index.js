$(document).ready(function() {

  $(".header-text").toggleClass("header-animation");
  $("#myCanvas").toggleClass("opacity-animation");

  $(".contact-form").submit(function(event) {

    event.preventDefault();
    var $form = $(this);

    var name = $form[0][0].value;
    var email = $form[0][1].value;
    var message = $form[0][2].value;

    if (!checkEmail(email)) {
      // If Email is not valid:
      $(".contact-alert-message").removeClass("contact-alert-message-display");
      $("#contact-alert-message-text").html("Invalid email address, please try again.");
      return;
    } else if (name.length < 1) {
      $(".contact-alert-message").removeClass("contact-alert-message-display");
      $("#contact-alert-message-text").html("Please leave your name.");
      return;
    }

    $.ajax({
      type: "POST",
      url: "/",
      data: $(".contact-form").serialize(),
      success: function(res) {
        $(".contact-alert-message").removeClass("contact-alert-message-display");
        $("#contact-alert-message-text").html("Your message has been successfully sent!");
        $(".contact-form input").val("");
        $(".contact-form textarea").val("");
      }
    });

  });

});

function checkEmail(email) {
  var emailRegEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  return emailRegEx.test(email);
}

$(document).scroll(function() {

  $(".navbar").addClass("scrolled-navbar");

  if ($(document).scrollTop() < 200) {
    $(".navbar").removeClass("scrolled-navbar");
    $(".navbar").addClass("unscrolled-navbar");
  }

   $('.about-section .index-section-header').toggleClass('slide-in-left', isVisible(".about-section .index-section-header"));
   $('.compiler-header').toggleClass('scale-up', isVisible(".compiler-header"));
   $('.compiler-description').toggleClass('slide-in-right', isVisible(".compiler-description"));
   $('.compiler-image img').toggleClass('slide-in-left', isVisible(".compiler-description"));
   $('.cv-header').toggleClass('slide-in-right', isVisible(".cv-header"));
   $('.contact-me-text .index-section-header').toggleClass('scale-up', isVisible(".contact-me-text .index-section-header"));



});

function isVisible(descriptor) {
  var top = $(window).scrollTop() + $(window).height();
  if (top > $(`${descriptor}`).offset().top) {
    return true;
  }
  return false;
}

$(".navbar-toggler").on("click", function() {
  var navCollapsed = $(".collapse").is(":hidden");
  if (navCollapsed) {
    $(".navbar").addClass("scrolled-navbar");
  }
});


$(".btn").mouseover(function() {
  $(".header-arrow-icon").addClass("header-move-icon");
});

$(".btn").mouseout(function () {
  $(".header-arrow-icon").removeClass("header-move-icon");
});

$(".portfolio-section h2").mouseover(function() {
  $(".portfolio-section .carousel-images").addClass("portfolio-image-style");
});

$(".portfolio-section h2").mouseout(function() {
  $(".portfolio-section .carousel-images").removeClass("portfolio-image-style");
});

$(".contact-alert-button").on("click", function() {
  $(".contact-alert-message").addClass("contact-alert-message-display");
})
