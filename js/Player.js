class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.canvas = document.getElementById("canvas");
  }

  draw() {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
    ctx.shadowColor = '#000';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.fill();
    ctx.closePath();
  }

  move(moveConfig) {
    const { x, y } = moveConfig;
    this.x = x;
    this.y = y;
  }
}

const modifier = 10.25;
