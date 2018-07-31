const player = new Player(0, 0)

const shoot = (bullet) => {
    bullets.push(bullet)
}

const spawnEnemy = (enemy) => {
    enemies.push(enemy)
}

const addEnemies = () => {
    // ¯\_(ツ)_/¯
    // TODO: function spawn enemies
    const enemy = new Enemy(width/2, 40, 3, 10)
    spawnEnemy(enemy);
}
addEnemies()

const shootThrottled = throttle(200, shoot);

function update() {
    ctx.clearRect(0, 0, width, height);

    handleKeysPressed();

    applyForces();
    player.move({ x, y })
    player.draw()

    // TODO: kill enemy and bullet on contact

    bullets = bullets.filter(bullet => bullet.y >= -10)
    bullets.forEach(bullet => {
        bullet.draw();
        enemies.forEach(enemy => {
            const { x, y, radius } = enemy
            const leftBorder = x - radius
            const rightBorder = x + radius
            const topBorder = y - radius
            const bottomBorder = y + radius;
            const isInHitArea = bullet.y >= topBorder &&
                                bullet.y <= bottomBorder &&
                                bullet.x >= leftBorder &&
                                bullet.x <= rightBorder

            // TODO: COLLISION FOR players and enemy

            if(isInHitArea) {
                addEnemies();
                enemy.applyDamage(gunDamage);
                bullets = bullets.filter(b => b != bullet)
            }
        })
        }
    )

    enemies.forEach(enemy => {
        enemy.move({ x: enemy.x, y: enemy.y });
        enemy.draw();
    })
    requestAnimationFrame(update);
}

requestAnimationFrame(update);

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
