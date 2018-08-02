class Bullet {
  constructor(x, y, radius = 2, direction = -20,) {
    this.x = x;
    this.y = y + direction;
    this.radius = radius
    this.interval = setInterval(() => {
      this.y -= 10
    }, 50)
}

  draw() {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y+20, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
