const addEnemies = () => {
    enemiesInterval = setInterval(() => {
        if(!window.document.hidden){
            let x = width/2 + getRandomArbitrary(-150,150)
            let y = 0
            const type = getEnemyType();
            const enemy = new Enemy({...type, x,y})
            spawnEnemy(enemy);
        }
    }, spawnEnemyInterval)
}

function nextStage() {
    clearInterval(enemiesInterval);
    document.getElementById('nextLvl').style.display = "block";
    spawnEnemyInterval -= 200;
    setTimeout(() => {
        document.getElementById('nextLvl').style.display = "none";
        addEnemies();
    }, 2000)
}

function start() {
    clearInterval(enemiesInterval);
    addEnemies();
}

function StartGame () {
    document.getElementById('startScreen').style.display = "none";
    player.hp = startingHP;
    x = width/2,
    y = height*.8,
    player.x = width/2,
    player.y = height*.8,
    velY = 0,
    velX = 0,
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
  if (arrowsKeyCodes.includes(e.keyCode) || wsadKeyCodes.includes(e.keyCode)) {
    player.engineOn = true;
  }
});

document.body.addEventListener("keyup", (e) => {
  keys[e.keyCode] = false;
  player.engineOn = false;
});
