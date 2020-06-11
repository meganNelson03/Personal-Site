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

$("img").on("click", function() {

  console.log(this);
  $(".modal").css("display", "block");
  $("#my-image").attr("src", this.src);
});

$(".close-modal").on("click", function() {
  $(".modal").css("display", "none");
})
