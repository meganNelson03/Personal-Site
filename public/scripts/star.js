var mousePosition = view.center;

view.onMouseMove = function(event) {
    mousePosition = event.point;
}

window.onresize = function(event) {
  // Regenerate items every time screen size changes
  var numberItems = [Math.floor(window.innerWidth / 17), Math.floor(window.innerWidth / 170)];

  project.activeLayer.children = [];
  generateAndPlaceItems(numberItems[0]);
  generateUniqueItem(numberItems[1], "#80bdab", 15);
  generateUniqueItem(numberItems[1], "#ff9595", 10);
}

generateAndPlaceItems(Math.floor(window.innerWidth / 19));
generateUniqueItem(Math.floor(window.innerWidth / 170), "#80bdab", 15);
generateUniqueItem(Math.floor(window.innerWidth / 170), "#ff9595", 7);


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

  // make unique stars smaller for small screens
  if (window.innerWidth < 500) {
    radius = 5;
  }

  for (var i = 0; i < count ; i++) {

    var uniqueItem = new Path.Star(new Point(Point.random() * view.size), radius, radius/2);
    uniqueItem.fillColor = color;
    uniqueItem.strokeColor = color;
  }
}

function moveItem(item, vector) {

  var posDifference = mousePosition - view.center;
  var speed = (posDifference * vector)/100;

  if (speed.x == 0 & speed.y == 0) {
    speed.x = .05;
    speed.y = .05;
  }


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
