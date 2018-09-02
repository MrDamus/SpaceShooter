class Enemy {
  constructor({x, y, hp, radius, avatarSrc, points = 5, bullet = BULLETS.DEFAULT_ENEMY, velX, velY}) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.points = points;
    this.bullet = bullet;
    this.radius = radius;
    this.interval = setInterval(() => {
      this.spawnNewBullet();
    }, spawnEnemyBulletInterval - score)
    this.avatar = new Image();
    this.avatar.src = avatarSrc;
    this.avatarWidth = 20;
    this.avatarHeight = 20;
    this.velX = getRandomArbitrary(-velX, velY * 99/100);
    this.velY = getRandomArbitrary(0.1, velY);
  }

  draw() {
    const { x, y, avatar, avatarWidth, avatarHeight } = this;
    ctx.save();
    ctx.translate(-avatarWidth/2, avatarHeight/2);
    ctx.drawImage(avatar, x, y, avatarWidth, avatarHeight);
    ctx.restore();
  }

  applyDamage (damage) {
    this.hp -= damage;
    if(this.hp <= 0) {
      this.remove();
      incrementScore(this.points);
    }
  }

  spawnNewBullet(){
    const { x, y, bullet } = this;
    const newBullet = new Bullet({ x, y, owner: this, ...bullet})
    shoot(newBullet);
  }

  move(moveConfig) {
    const { x, y } = moveConfig;
    this.x = x + this.velX;
    this.y = y + this.velY;
  }

  remove() {
    clearInterval(this.interval);
    enemies = enemies.filter(e => e != this)
  }
}
