document.onreadystatechange = function() {

  var state = document.readyState;
   if (state == "complete") {
       $("#loading-element").fadeOut(3000);
       setTimeout(function() {
         $("#loading-element").remove();
         console.log("done");
       }, 3000)
  }
}

$("#loading-element").on("scroll", () => {
  console.log("yeehaw");
});


var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  resize: true,
  percentPosition: true
});

$(window).on("load", function() {
  $grid.imagesLoaded().progress(
    function() {
      $grid.masonry("layout");
    }
  )
})


$(document).ready(function() {

    $(".back-to-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});


$(".piece-image").on("click", function() {
  $(".modal").css("display", "block");
  $("#my-image").attr("src", this.src);
});

$(".close-modal").on("click", function() {
  modalMode = false;
  $(".modal").css("display", "none");
});

$(".piece-image").mouseover(function(event) {
  var target = $(event.target);
  $("img.piece-image[alt=\"" + target[0].alt + "\"] + .piece-caption").css("display", "block");

});

$(".piece-image").mouseout(function() {
  $(".piece-caption").css("display", "none");
});
