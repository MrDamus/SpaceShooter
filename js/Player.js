class Player {
  constructor(x, y, radius, hp) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.radius = radius;
    this.canvas = document.getElementById("canvas");
  }

  draw() {
    let ctx = canvas.getContext("2d");
    // ------[Circle]---------
    // ctx.beginPath();
    // ctx.save();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.shadowColor = '#000';
    // ctx.shadowBlur = 20;
    // ctx.shadowOffsetX = 15;
    // ctx.shadowOffsetY = 15;
    // ctx.fillStyle = 'green';
    // ctx.fill();
		//  ctx.restore();
    // ctx.closePath();

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
}

const modifier = 10.25;
