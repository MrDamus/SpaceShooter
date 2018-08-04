const renderPlayerHP = () => {
  ctx.font = '15px kong';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillText  (`HP: ${player.hp}`, 50, 20);
  const showHp = 'Player'
}


renderUI = () => {
  renderPlayerHP();
}

document.fonts.load('10pt "kong"')