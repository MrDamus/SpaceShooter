class Player {
  constructor(x, y, radius, hp, bullet = BULLETS.DEFAULT_PLAYER) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.bullet = bullet
    this.radius = radius;
    this.canvas = document.getElementById("canvas");
  }

  draw() {
    // ------[Triangle]---------
    const triangleWidth = 15;
    const triangleHeight = 15;
    ctx.beginPath();
    ctx.save();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + triangleWidth / 2, this.y + triangleHeight);
    ctx.lineTo(this.x - triangleWidth / 2, this.y + triangleHeight);
    ctx.fillStyle = 'green';
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

  move(moveConfig) {
    const { x, y } = moveConfig;
    this.x = x;
    this.y = y;
  }

  shoot() {
    const { bullet } = this;
    let newBullet = new Bullet({x: player.x, y: player.y, owner: this, ...bullet});
    shootThrottled(newBullet)
    // SOUNDS.pew.play();
  }
}

player = new Player(0, 0, 5, 30)

