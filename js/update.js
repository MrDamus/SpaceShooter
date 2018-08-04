function handlePlayerMovement() {
    applyForces();
    player.move({ x, y })
    player.draw()
}

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

function detectBulletCollisions() {
    bullets = bullets.filter(bullet => (bullet.y <= 405 && bullet.y >= -10))
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
}

function handleCollision_Enemy_Player(enemy, borders) {
    const isInPlayerArea =  player.y >= borders.top - player.radius &&
                            player.y <= borders.bottom + player.radius &&
                            player.x >= borders.left - player.radius &&
                            player.x <= borders.right + player.radius
                            
    if(isInPlayerArea) {
        player.applyDamage(enemyDamage);
        enemy.applyDamage(enemy.hp);
    }
}

function handleCollision_Enemy_Border(enemy, borders) {
    const leftDeadLine = -50;
    const rightDeadLine = 450;
    const topDeadLine = -100;
    const bottomDeadLine = 410;

    const enemyOutOfCanvas = borders.left <= leftDeadLine ||
                        borders.right >= rightDeadLine ||
                        borders.top <= topDeadLine ||
                        borders.bottom >= bottomDeadLine

    if (enemyOutOfCanvas) {
        enemy.applyDamage(enemy.hp);
    }
}

function handleDrawingEnemies() {
    enemies.forEach(enemy => {
        const { x, y, radius } = enemy
        const borders = {
            left: x - radius,
            right: x + radius,
            top: y - radius,
            bottom: y + radius,
        }
        handleCollision_Enemy_Player(enemy, borders);
        handleCollision_Enemy_Border(enemy, borders);
        enemy.move({ x: enemy.x, y: enemy.y });
        enemy.draw();
    })
}


function update() {
    clearCanvas();
    handlePlayerMovement();
    handleKeysPressed();
    renderUI();
    updateStars();
    detectBulletCollisions();
    handleDrawingEnemies();

    requestAnimationFrame(update);
}
