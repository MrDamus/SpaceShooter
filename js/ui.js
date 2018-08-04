const renderPlayerHP = () => {
  ctx.font = '15px kong';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillText  (`HP: ${player.hp}`, 50, 20);
  const showHp = 'Player'
}

function renderText() {
    ctx.font = `18px "${FONT_NAME}"`;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText('Waka Waka', 150, 50);
}

renderUI = () => {
  renderPlayerHP();
}

document.fonts.load('10pt "kong"')