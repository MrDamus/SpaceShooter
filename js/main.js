const speed = 10;
const movementMap = (keyCode, keyUp = false) => {
  if (keyCode === 38 /* up */ || keyCode === 87 /* w */){
    movement.setY(keyUp)
    movement.setSpeedY(keyUp ? -speed : 0)
  }
  if (keyCode === 40 /* down */ || keyCode === 83 /* s */){
    movement.setY(keyUp)
    movement.setSpeedY(keyUp ? speed : 0)
  }
  if (keyCode === 37 /* left */  || keyCode === 65 /* a */ ) {
    movement.setX(keyUp)
    movement.setSpeedX(keyUp ? -speed : 0)
  }
  if (keyCode === 39 /* right */ || keyCode === 68 /* d */){
    movement.setX(keyUp)
    movement.setSpeedX(keyUp ? speed : 0)
  }
  return { ...movement }
}

var c = document.getElementById("myCanvas");
c.style.backgroundColor='lightblue';
const p = new Player(95,50)
const clearCanvas = () => {
  context = c.getContext('2d');
  context.clearRect(0, 0, c.width, c.height);
}


(function loop(){
  p.draw();
  requestAnimationFrame(loop);
})();

const onKeyDownPress = (e) => {
  const move = movementMap(e.keyCode, true);
  clearCanvas();
  p.move(move);
}

const onKeyUpPress = (e) => {
  const move = movementMap(e.keyCode);
  clearCanvas();
  p.move(move);
}

document.addEventListener('keydown',onKeyDownPress)
document.addEventListener('keyup',onKeyUpPress)
