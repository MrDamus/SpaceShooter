const bulletRadius = 2;

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y - 20;
    this.canvas = document.getElementById("canvas");
    this.interval = setInterval(() => {
      this.y -= 10
    }, 50)
  }

  draw() {
    console.log(this.y);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, bulletRadius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}
