class Player {
  constructor(x, y, hp, bullet = BULLETS.DEFAULT_PLAYER) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.bullet = bullet;
    this.canvas = document.getElementById("canvas");

    this.color= "black",
    
    this.width= 8,
    this.height= 22,
    this.engineOn= false
  }

  // draw() {
  //   // ------[Triangle]---------
  //   const triangleWidth = 15;
  //   const triangleHeight = 15;
  //   ctx.beginPath();
  //   ctx.save();
  //   ctx.moveTo(this.x, this.y);
  //   ctx.lineTo(this.x + triangleWidth / 2, this.y + triangleHeight);
  //   ctx.lineTo(this.x - triangleWidth / 2, this.y + triangleHeight);
  //   // ctx.moveTo(this.x - triangleWidth / 2 , this.y);
  //   ctx.fillStyle = 'green';
  //   ctx.fill();
  //   ctx.closePath();
  //   ctx.restore();
  // }



  draw()
{
    ctx.save();
    ctx.beginPath();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.rect(this.width * -0.5, this.height * -0.5, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    
    if(this.engineOn)
    {
      ctx.beginPath();
      ctx.moveTo(this.width * -0.5, this.height * 0.5);
      ctx.lineTo(this.width * 0.5, this.height * 0.5);
      ctx.lineTo(0, this.height * 0.5 + Math.random() * 5);
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

player = new Player(0, 0, 30)

