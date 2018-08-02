const player = new Player(0, 0, 5, 30)

const addEnemies = () => {
    setInterval(() => {
        let x = width/2 + getRandomArbitrary(-150,150)
        let y = 0
        const enemy = new Enemy(x, y, 3, 10)
        spawnEnemy(enemy);
    }, 500)
}

addEnemies()

function update() {
    ctx.clearRect(0, 0, width, height);

    handleKeysPressed();

    applyForces();
    player.move({ x, y })
    player.draw()

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
        }

        const leftDeadLine = -50;
        const rightDeadLine = 450;
        const topDeadLine = -100;
        const bottomDeadLine = 410;

        const isOutOfGame = leftBorder <= leftDeadLine ||
                            rightBorder >= rightDeadLine ||
                            topBorder <= topDeadLine ||
                            bottomBorder >= bottomDeadLine
                                
        if (isOutOfGame) {
            console.log('enemy is ouf of game')
            enemies = enemies.filter(e => e != enemy)
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
