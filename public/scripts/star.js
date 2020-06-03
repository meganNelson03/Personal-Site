var stars = [];
var deltax = 1;
var deltay = 1;
var mousePosition = view.center;

generateStars(50);

function onFrame(event) {

  for (var i = 0 ; i < stars.length ; i++) {
         reactToMouse(stars[i], 1, 1, 0.008);
         stars[i].position.x += deltax;
         stars[i].position.y += deltay;
         // twinkle(stars[i]);
         stars[i].rotate(0.3);
         keepItemInView(stars[i]);
  }

}

view.onMouseMove = function(event){
   mousePosition = event.point;
}

stars.forEach(function(star) {
  star.onMouseMove = function(event) {
    star.opacity = 1;
    star.fillColor = "aquamarine";
  }
});

function generateStars(count) {

    for (var i = 0; i < count; i++) {
        var center = new Point(Math.random() * view.bounds.width, Math.random() * view.bounds.height);
        var points = Math.floor(Math.random() * 5) + 5;
        var radius1 = 4 - ((i + (count * 2))/count);
        var radius2 =  10;
        var star = new Path.Star(center, points, radius1, radius2);
        star.fillColor = "white";

        stars.push(star);
    }

}

function reactToMouse(item, deltaX, deltaY, speedFactor) {

    var viewDifferenceX = Math.abs(mousePosition.x - view.center.x);
    var viewDifferenceY = Math.abs(mousePosition.y - view.center.y);

    if (viewDifferenceX < 200 && viewDifferenceY < 200) {
        deltax = viewDifferenceX * (speedFactor / 1);
        deltay = viewDifferenceY * (speedFactor / 1);
        return;
    }

    var differenceX = Math.abs(mousePosition.x - view.center.y);
    var differenceY = Math.abs(mousePosition.y - view.center.y);

    if (mousePosition.x < view.center.x) {
        deltax = deltaX + (differenceX * speedFactor);

    }

    if (mousePosition.x > view.center.x) {
        deltax = -deltaX - (differenceX * speedFactor);
    }

    if (mousePosition.y > view.center.y) {
        deltay = -deltaY - (differenceY * speedFactor);
    }

    if (mousePosition.y < view.center.y) {
        deltay = deltaY + (differenceY * speedFactor);
    }

}
//
//
function keepItemInView(item) {

    var position = item.position;

    if (position.x >= view.bounds.width ) {
        position.x = item.bounds.width + 5;
    }

    if (position.x <= item.bounds.width) {
        position.x = view.bounds.width - item.bounds.width;
    }

    if (position.y >= view.bounds.height) {
        position.y = item.bounds.height * 2;
    }

    if (position.y <= item.bounds.height) {
        position.y = view.bounds.height - item.bounds.height;
    }

}
