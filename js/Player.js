class Player {
  constructor(x, y, hp, bullet = BULLETS.DEFAULT_PLAYER) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.bullet = bullet;
    this.canvas = document.getElementById("canvas");

    this.color= "green",
    
    this.width= 15,
    this.height= 20,
    this.engineOn= false
  }

  draw()
{
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.width / 2, this.y + this.height);
    ctx.lineTo(this.x - this.width / 2, this.y + this.height);
    ctx.closePath();

    ctx.fillStyle = this.color;
    ctx.fill();
    
    if(this.engineOn)
    {
      ctx.beginPath();
      ctx.translate(this.x, this.y + this.height/2);
      ctx.lineTo(this.width * 0.5, this.height * 0.5);
      ctx.lineTo(0, this.height * 0.5 + Math.random() * 8);
      ctx.lineTo(this.width * -0.5, this.height * 0.5);
      ctx.closePath();
      ctx.fillStyle = "orange";
      ctx.fill();
    }
    ctx.restore();
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

player = new Player(0, 0, startingHP)

