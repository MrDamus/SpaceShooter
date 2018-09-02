const shoot = (bullet) => {
    if(!window.document.hidden){
        bullets.push(bullet)
    }
}

const spawnEnemy = (enemy) => {
    enemies.push(enemy)
}

const shootThrottled = throttle(200, shoot);


const handleKeysPressed = () => {
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
      player.shoot();
    }
}

const applyForces = () => {
    velY *= friction;
    y += velY;
    velX *= friction;
    x += velX;

    if (x+6 >= width-radius) {
        x = width-radius-6;
    } else if (x-6 <= radius) {
        x = radius + 6;
    }

    if (y+15 > height-radius) {
        y = height-radius-15;
    } else if (y +9 <= radius) {
        y = radius - 9;
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
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

const getEnemyType = () => {
    const RN = getRandomArbitrary(0,4)
    if (RN > 0 && RN <= 1) {
        return ENEMIES.DEFAULT_ENEMY
    } 
    if (RN > 1 && RN <= 2) {
        return ENEMIES.GREEN_ENEMY
    } 
    if (RN > 2 && RN <= 3) {
        return ENEMIES.ORANGE_ENEMY
    } 
    if (RN > 3 && RN <= 4) {
        return ENEMIES.RED_ENEMY
    }
}

let nextStageScore = 100;
const incrementScore = (value) => {
    score += value;
    if(score >= nextStageScore) {
        nextStageScore += 100;
        nextStage()
    }
}