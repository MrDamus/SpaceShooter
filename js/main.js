const speed = 1;
const movementMap = (keyCode) => {
  if (keyCode === 38 /* up */ || keyCode === 87 /* w */){
    return { direction : 'y', speed: -speed}
  }
  if (keyCode === 39 /* right */ || keyCode === 68 /* d */){
    return { direction : 'x', speed}
  }
  if (keyCode === 40 /* down */ || keyCode === 83 /* s */){
    return { direction : 'y', speed}
  }
  if (keyCode === 37 /* left */  || keyCode === 65 /* a */ ) {
    return { direction : 'x', speed: -speed}
  }
}


var c = document.getElementById("myCanvas");
c.style.backgroundColor='lightblue';
const p = new Player(95,50)
p.draw();

const clearCanvas = () => {
  context = c.getContext('2d');
  context.clearRect(0, 0, c.width, c.height);
}


const onPress = (e) => {
  const move = movementMap(e.keyCode);
  clearCanvas();
  p.move(move);
}
document.addEventListener('keydown',onPress)