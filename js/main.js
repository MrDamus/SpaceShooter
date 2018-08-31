const addEnemies = () => {
    setInterval(() => {
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
    addEnemies();
} 

function StartGame () {
    document.getElementById('ui').style.display = "none";
    start();

    if(!window.document.hidden){
        requestAnimationFrame(update);
    }
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
    player.engineOn = true;

});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
    player.engineOn = false;
});

