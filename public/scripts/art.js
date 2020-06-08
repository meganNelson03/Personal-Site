var $grid = $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  resize: true,
  // columnWidth: 30,
  percentPosition: true
});

$grid.imagesLoaded().progress(
  function() {
    $grid.masonry("layout");
  }
)
