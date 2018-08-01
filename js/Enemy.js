class Enemy {
  constructor(x, y, hp, radius) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.radius = radius
  }

  draw() {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.save();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // ctx.fill();
    ctx.shadowColor = '#FFF';
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
  }

  applyDamage(damage) {
    this.hp -= damage;
    if(this.hp <= 0) {
      enemies = enemies.filter(e => e != this)
    }
  }

  move(moveConfig) {
    const { x, y } = moveConfig;
    this.x = x + Math.random();
    this.y = y + Math.random();
  }
}
