class Bullet {
  constructor({x, y, radiusX = 2, radiusY = 6, offset = -20, speed = 10, owner, damage = 1}) {
    this.x = x;
    this.y = y + offset;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.owner = owner;
    this.damage = damage;
    this.interval = setInterval(() => {
      this.y -= speed
    }, 50)
}

  draw() {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(this.x, this.y+20, this.radiusX, this.radiusY, 0, 2 * Math.PI, 0);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.restore(); 
  }
}
