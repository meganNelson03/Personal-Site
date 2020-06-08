var $grid = $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  resize: true,
  // columnWidth: 0,
  // columns: 3,
  percentPosition: true
});

$grid.imagesLoaded().progress(
  function() {
    $grid.masonry("layout");
  }
)
