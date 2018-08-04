const addEnemies = () => {
    setInterval(() => {
        let x = width/2 + getRandomArbitrary(-150,150)
        let y = 0
        const enemy = new Enemy(x, y, 3, 10)
        spawnEnemy(enemy);
    }, 3000)
}

function start() {
    addEnemies();
} 

start();
requestAnimationFrame(update);

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

