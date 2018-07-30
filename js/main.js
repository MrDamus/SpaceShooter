const player = new Player(0,0)
let bullets = [];

const shoot = (bullet) => {
    bullets.push(bullet)
}

function throttle(delay, fn) {
    let lastCall = 0;
    return (...args) => {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  }

const shootThrottled = throttle(200, shoot);

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
      const bullet = new Bullet(player.x, player.y);
      shootThrottled(bullet)
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
    bullets = bullets.filter(bullet => bullet.y >= -10)
    bullets.forEach(bullet => {
        bullet.draw();
        }
    )

    requestAnimationFrame(update);
}

requestAnimationFrame(update);

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
