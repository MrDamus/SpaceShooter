const addEnemies = () => {
    enemiesInterval = setInterval(() => {
        if(!window.document.hidden){
            let x = width/2 + getRandomArbitrary(-150,150)
            let y = 0
            const type = getEnemyType();
            const enemy = new Enemy({...type, x,y})
            spawnEnemy(enemy);
        }
    }, 3000)
}

function start() {
    clearInterval(enemiesInterval);
    addEnemies();
}

function StartGame () {
    document.getElementById('startScreen').style.display = "none";
    player.hp = startingHP; 
    score = 0;
    enemies.forEach(enemy => {
        enemy.remove();
    });
    enemies = [];
    enemies.length = 0;
    bullets = [];
    bullets.length = 0;
    gameInProgress = true;
    document.getElementById("over").style.display = 'none';
    start();
    if(!window.document.hidden){
        requestAnimationFrame(update);
    }
}

document.body.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
    player.engineOn = true;
});

document.body.addEventListener("keyup", (e) => {
    keys[e.keyCode] = false;
    player.engineOn = false;
});
