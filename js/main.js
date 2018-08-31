const addEnemies = () => {
    setInterval(() => {
        if(!window.document.hidden){
            let x = width/2 + getRandomArbitrary(-150,150)
            let y = 0
            const enemy = new Enemy({...ENEMIES.DEFAULT_ENEMY, x,y})
            spawnEnemy(enemy);
        }
    }, 3000)
}

function start() {
    addEnemies();
} 

start();

if(!window.document.hidden){
    requestAnimationFrame(update);
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    player.engineOn = true;

});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
    player.engineOn = false;
});

