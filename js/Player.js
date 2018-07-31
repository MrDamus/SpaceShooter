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
    ctx.fill();
  }

  move(moveConfig) {
    const { x, y } = moveConfig;
    this.x = x;
    this.y = y;
  }
}

const modifier = 10.25;
class Movement {
  constructor(isX, isY) {
    this.isX = isX;
    this.isY = isY;
    this.speedX = 0;
    this.speedY = 0;
  }
  setX(value) {
    this.isX =  value
  }
  setY(value) {
    this.isY =  value
  }
  setSpeedX(value) {
    this.speedX = value * Math.abs((this.speedX ? (this.speedX/modifier) : 1))
    console.log(value, this.speedX);
  }
  setSpeedY(value) {
    this.speedY = value * Math.abs((this.speedY ? (this.speedY/modifier) : 1))
    console.log(value, this.speedY);
  }
}

const movement = new Movement(false,false);
