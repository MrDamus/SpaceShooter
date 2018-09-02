class Player {
  constructor(x, y, hp, bullet = BULLETS.DEFAULT_PLAYER, imgSrc) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.bullet = bullet;
    this.canvas = document.getElementById("canvas");

    this.img = new Image();
    this.img.src = imgSrc || '../assets/img/ship.png';

    this.width= 31,
    this.height= 20,
    this.engineOn= false
  }

  draw()
{
    ctx.save();
    ctx.translate(-15, 0)
    ctx.drawImage(this.img, x, y, this.width, this.height);

    if(this.engineOn)
    {
      ctx.beginPath();
      ctx.translate(this.x+16, this.y + this.height/2);
      ctx.lineTo(this.width * 0.2, this.height * 0.5);
      ctx.lineTo(0, this.height * 0.5 + Math.random() * 8);
      ctx.lineTo(this.width * -0.2, this.height * 0.5);
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
      document.getElementById("over").style.display = 'block';
      gameInProgress = false;

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

player = new Player(0, 0, startingHP, '/assets/img/ship.png')

