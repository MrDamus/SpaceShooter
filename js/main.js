var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor='lightblue';


var width = 360,
    height = 400,
    x = width/2,
    y = height/2,
    radius = 10,
    velY = 0,
    velX = 0,
    speed = 3,
    friction = 0.94,
    keys = [];

function update() {
    requestAnimationFrame(update);
    
    if (keys[38]) {
        if (velY > -speed) {
            velY--;
        }
    }
    
    if (keys[40]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37]) {
        if (velX > -speed) {
            velX--;
        }
    }

    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x >= width-radius) {
        x = width-radius;
    } else if (x <= radius) {
        x = radius;
    }

    if (y > height-radius) {
        y = height-radius;
    } else if (y <= radius) {
        y = radius;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
}

update();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});