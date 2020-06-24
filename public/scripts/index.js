$(document).ready(function() {

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

  $(".navbar").addClass("scrolled");

  if ($(document).scrollTop() < 200) {
    $(".navbar").removeClass("scrolled");
    $(".navbar").addClass("unscrolled");
  }

});

$(".navbar-toggler").on("click", function() {
  var navCollapsed = $(".collapse").is(":hidden");
  if (navCollapsed) {
    $(".navbar").addClass("scrolled");
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
