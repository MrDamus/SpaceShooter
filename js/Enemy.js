const enemyRadius = 20;

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.canvas = document.getElementById("canvas");
  }

  draw() {
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(this.x, this.y, enemyRadius, 0, 2 * Math.PI);
    // ctx.fill();
    ctx.stroke();

  }

}
