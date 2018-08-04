const FONT_NAME = 'kong';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
    // canvas.style.backgroundColor='#2F2E2E';
    canvas.style.backgroundColor='lightblue';
    
    width = 360,
    height = 400,
    speed = 2.4,
    friction = 0.94,
    radius = 10

let x = width/2,
    y = height/2,
    velY = 0,
    velX = 0,
    keys = [];
    bullets = [];
    enemies = [];
    gunDamage = 1;
    enemyDamage = 1;

const SOUNDS = {
    pew: document.getElementById('sound_pew'),
}
