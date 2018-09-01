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

        // collision bullet/enemies
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

        // collision bullet/player
        if(bullet.owner instanceof Enemy) {
            const enemyBulletInPlayerArea = bullet.y >= player.y - player.height && 
                                            bullet.y <= player.y + player.height &&
                                            bullet.x >= player.x - player.width &&
                                            bullet.x <= player.x + player.width

            if (enemyBulletInPlayerArea) {
                console.log('You have been hit by enemy bullet!')
                player.applyDamage(enemyDamage)
                bullets = bullets.filter(b => b != bullet)

            }
        }
        }
    )
}

function handleCollision_Enemy_Player(enemy, borders) {
    const enemyInPlayerArea =  player.y >= borders.top - player.height &&
                            player.y <= borders.bottom + player.height &&
                            player.x >= borders.left - player.width &&
                            player.x <= borders.right + player.width
                            
    if(enemyInPlayerArea) {
        player.applyDamage(enemyDamage);
        enemy.applyDamage(enemy.hp);
    }
}

function handleCollision_Enemy_Border(enemy, borders) {
    const leftDeadLine = -50;
    const rightDeadLine = width + 20;
    const topDeadLine = -100;
    const bottomDeadLine = height + 20;

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

function updateScore() {
    if (score < 40) {
        document.getElementById("score").innerHTML = "You suck!";
    }
    else if (score > 2000) {
        document.getElementById("score").innerHTML = "You rock! Score:" + score;
    }
    else {
        s = "Your score: " + score;
        document.getElementById("score").innerHTML = s;
    }
}

// GAME OVER 
function updatePlayerHP() {
    if (player.hp <= 0) {
        // document.getElementById("score").innerHTML = "Game Over!";
        document.getElementById("over").style.display = 'block';
    }
}

function update() {
    clearCanvas();
    handlePlayerMovement();
    handleKeysPressed();
    renderUI();
    updateStars();
    detectBulletCollisions();
    handleDrawingEnemies();
    updateScore();
    updatePlayerHP();
    if(gameInProgress){
        requestAnimationFrame(update);
    }
}
