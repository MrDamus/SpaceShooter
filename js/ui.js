const kongFont = '15px kong'

const renderPlayerHP = () => {
  ctx.font = kongFont;
  ctx.textAlign = 'right';
  ctx.fillText  (`HP: ${player.hp}`, 355, 15);
  // const showHp = 'Player'
}

const renderScore = () => {
  ctx.font = kongFont;
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'left';
  ctx.fillText  (`SCORE: ${score}`, 5, 15);
}

renderUI = () => {
  renderPlayerHP();
  renderScore();
}

document.fonts.load('10pt "kong"')