class Enemy {
  constructor(x, y, radius) {
    this.x = width/2;
    this.y = 50;
    this.radius = radius;
    this.canvas = document.getElementById("canvas");
  }

  draw() {
    var ctx = c.getContext("2d");
    enemy = new Enemy(100, 100, radius)

    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    ctx.fill(255);
  }

}