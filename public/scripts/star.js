var mousePosition = view.center;

view.onMouseMove = function(event) {
    mousePosition = event.point;
}

window.onresize = function(event) {
  // Regenerate items every time screen size changes
  project.activeLayer.children = [];
  generateAndPlaceItems(100);
  generateUniqueItem(10, "#80bdab", 15);
  generateUniqueItem(10, "#ff9595", 10);
}

generateAndPlaceItems(100);
generateUniqueItem(10, "#80bdab", 15);
generateUniqueItem(10, "#ff9595", 7);


function onFrame(event) {
  for (var i = 0; i < project.activeLayer.children.length ; i++) {
      moveItem(project.activeLayer.children[i], 0.1);
      circulateItem(project.activeLayer.children[i]);
  }
}

function generateAndPlaceItems(itemCount) {

    var radius = 7;
    var item = new Path.Star(new Point(0, 0), radius, radius/2);
    item.fillColor = "white";
    item.strokeColor = "white";

    var itemSymbol = new Symbol(item);

    for (var i = 0 ; i < itemCount ; i++) {
        var randomPlace = Point.random() * view.size;
        var placedItem = itemSymbol.place(randomPlace);
        placedItem.scale((i / itemCount) + .03);
    }
}

function generateUniqueItem(count, color, radius) {
  for (var i = 0; i < count ; i++) {
    var uniqueItem = new Path.Star(new Point(Point.random() * view.size), radius, radius/2);
    uniqueItem.fillColor = color;
    uniqueItem.strokeColor = color;
  }
}

function moveItem(item, vector) {

  var posDifference = mousePosition - view.center;
  var speed = (posDifference * vector)/100;

  item.bounds.x -= item.bounds.width * speed.x;
  item.bounds.y -= item.bounds.width * speed.y;
}

function circulateItem(item) {
    // keep items in view
    if (item.position.x >= view.bounds.width) {
        item.position.x = item.bounds.width + 5;
    }

    if (item.position.x <= item.bounds.width) {
        item.position.x = view.bounds.width - 5;
    }

    if (item.position.y >= view.bounds.height) {
        item.position.y = item.bounds.height;
    }

    if (item.position.y <= item.bounds.height - 5) {
        item.position.y = view.bounds.height;
    }
}
