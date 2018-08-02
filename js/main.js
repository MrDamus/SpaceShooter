const player = new Player(0, 0, 5, 30)

const shoot = (bullet) => {
    bullets.push(bullet)
}

const spawnEnemy = (enemy) => {
    enemies.push(enemy)
}

const addEnemies = () => {
    // ¯\_(ツ)_/¯
    setInterval(() => {
        let x = width/2 + getRandomArbitrary(-150,150)
        let y = 0
        const enemy = new Enemy(x, y, 3, 10)
        spawnEnemy(enemy);
    }, 500)
}
addEnemies()

const shootThrottled = throttle(200, shoot);

function update() {
    ctx.clearRect(0, 0, width, height);

    handleKeysPressed();

    applyForces();
    player.move({ x, y })
    player.draw()
    // player.drawTriangle();

    updateStars();

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
                enemy.applyDamage(gunDamage);
                bullets = bullets.filter(b => b != bullet)
            }
        })
        }
    )

    enemies.forEach(enemy => {
        const { x, y, radius } = enemy
        const leftBorder = x - radius
        const rightBorder = x + radius
        const topBorder = y - radius
        const bottomBorder = y + radius;

        const isInPlayerArea =  player.y >= topBorder - player.radius &&
                                player.y <= bottomBorder + player.radius &&
                                player.x >= leftBorder - player.radius &&
                                player.x <= rightBorder + player.radius

                                
        if(isInPlayerArea) {
            player.applyDamage(enemyDamage);
            enemies = enemies.filter(e => e != enemy)
            console.log(player.hp, radius)
        }
                    

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
