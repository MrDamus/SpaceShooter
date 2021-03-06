const renderPlayerHP = () => {
  ctx.save();
  ctx.font = '16px kong'
  ctx.textAlign = 'right';
  ctx.fillStyle = "white";
  ctx.fillText  (`HP: ${player.hp}`, 355, 20);
  ctx.restore();
}

const renderScore = () => {
  ctx.save();
  ctx.font = '16px kong'
  ctx.textBaseline = 'middle';
  ctx.fillStyle = "white";
  ctx.textAlign = 'left';
  ctx.fillText  (`SCORE: ${score}`, 5, 15);
  ctx.restore();
}

renderUI = () => {
  renderPlayerHP();
  renderScore();
}

const startScreen = document.getElementById('startScreen');
const over = document.getElementById('over');

startScreen.addEventListener('mousedown', (e) => {
  StartGame()
}, false);

document.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    if(startScreen.style.display !== 'none' || over.style.display !== 'none') {
      document.getElementById('over').style.display = 'none'
      document.getElementById('startScreen').style.display = 'none'
      gameInProgress = true;
      StartGame()
    }
  }
});