var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor='lightblue';

const player = new Player(0,0)
const bullets = [];

const shoot = (bullet) => {
    bullets.push(bullet)
}

var width = 360,
    height = 400,
    x = width/2,
    y = height/2,
    radius = 10,
    velY = 0,
    velX = 0,
    speed = 3.4,
    friction = 0.94,
    keys = [];

function update() {
    ctx.clearRect(0, 0, width, height);

    if (keys[38] || keys[87]) {
        if (velY > -speed) {
            velY--;
        }
    }
    if (keys[40] || keys[83]) {
        if (velY < speed) {
            velY++;
        }
    }
    if (keys[39] || keys[68]) {
        if (velX < speed) {
            velX++;
        }
    }
    if (keys[37] || keys[65]) {
        if (velX > -speed) {
            velX--;
        }
    }
    if (keys[32]) { 
      // SPACE: shoot
      const bullet = new Bullet(player.x, player.y)
      
      shoot(bullet)
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

    player.move({ x, y })
    player.draw()

    bullets.forEach(bullet => {
        bullet.draw();
    });

    requestAnimationFrame(update);
}

requestAnimationFrame(update);
// update();

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
