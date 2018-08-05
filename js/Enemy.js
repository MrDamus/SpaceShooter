class Enemy {
  constructor({x, y, hp, radius, bullet = BULLETS.DEFAULT_ENEMY}) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.bullet = bullet
    this.radius = radius;
    this.interval = setInterval(() => {
      this.spawnNewBullet();
    }, 1277)
  }

  draw() {
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

  applyDamage (damage) {
    this.hp -= damage;
    if(this.hp <= 0) {
      this.remove();
      enemies = enemies.filter(e => e != this)
    }
  }

  spawnNewBullet(){
    const { x, y, bullet } = this;
    const newBullet = new Bullet({ x, y, owner: this, ...bullet})
    shoot(newBullet);
  }

  move(moveConfig) {
    const { x, y } = moveConfig;
    this.x = x + getRandomArbitrary(-1,1);
    this.y = y + getRandomArbitrary(-1,2);
  }

  remove() {
    clearInterval(this.interval);
  }
}
