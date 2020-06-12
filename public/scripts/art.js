var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  resize: true,
  percentPosition: true
});

$grid.imagesLoaded().progress(
  function() {
    $grid.masonry("layout");
  }
)

$(".piece-im").on("click", function() {

  $(".modal").css("display", "block");
  $("#my-image").attr("src", this.src);
});

$(".close-modal").on("click", function() {
  $(".modal").css("display", "none");
});

$(".piece-im").mouseover(function(event) {
  var target = $(event.target);
  console.log(target[0]);
  $("img.piece-im[alt=\"" + target[0].alt + "\"] + .piece-caption").css("display", "block");

});

$(".piece-im").mouseout(function() {

  $(".piece-caption").css("display", "none");

});
