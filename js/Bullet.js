class Bullet {
  constructor({x, y, radius = 2, offset = -20, speed = 10, owner, damage = 1}) {
    this.x = x;
    this.y = y + offset;
    this.radius = radius;
    this.owner = owner;
    this.damage = damage;
    this.interval = setInterval(() => {
      this.y -= speed
    }, 50)
}

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y+20, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
