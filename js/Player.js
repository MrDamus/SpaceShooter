const playerRadius = 5;

class Player {
  constructor(x, y, hp, radius) {
    this.x = x;
    this.y = y;
    this.hp = hp;
    this.radius = radius;
    this.canvas = document.getElementById("canvas");
  }

  draw() {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.save();
    ctx.arc(this.x, this.y, playerRadius, 0, Math.PI * 2);
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
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
