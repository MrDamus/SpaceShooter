class Enemy {
  constructor(x, y, hp, radius) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.radius = radius
    this.interval = setInterval(() => {
      //spawn bullet
      // this.spawnBullet(bullet);
    }, 2000)
  }

  draw() {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.save();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.shadowColor = '#FFF';
    ctx.stroke();
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.restore();
    ctx.closePath();
  }

  applyDamage(damage) {
    this.hp -= damage;
    if(this.hp <= 0) {
      enemies = enemies.filter(e => e != this)
    }
  }

  spawnBullet(bullet){
    const bullet = new Bullet(this.x, this.y, 1, 10)
  }

  move(moveConfig) {
    const { x, y } = moveConfig;
    this.x = x + getRandomArbitrary(-1,1);
    this.y = y + getRandomArbitrary(-1,2);
  }
}
