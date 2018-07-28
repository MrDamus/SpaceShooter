const radius = 40;

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.canvas = document.getElementById("myCanvas");
  }

  draw() {
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  move(move) {
    const { direction, speed } = move;
    this.x = this.x + (direction === 'x' ? speed : 0);
    this.y = this.y + (direction === 'y' ? speed : 0);
    console.log(this.x, this.y, direction, speed)
    console.log(direction === 'x', direction === 'y')

    this.draw();
  }
}