const FONT_NAME = 'kong';
const startingHP = 10;

let nextStageScore = 100;

let spawnEnemyInterval = 3600;
let spawnEnemyBulletInterval = 2000;

let player;
let gameInProgress = true;
let score = 0;
let enemiesInterval;

const boom = new Image();
boom.src = 'assets/img/boom.png';

const arrowsKeyCodes = [38, 40, 39, 37];
const wsadKeyCodes = [87, 83, 68, 65];

const scoreWrapper = document.getElementById("score");
scoreWrapper.innerHTML = "Score: " + score;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
    canvas.style.backgroundColor='black';

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

const BULLETS = {
    DEFAULT_ENEMY:  { radiusX: 3, radiusY: 3, offset: 20, speed:-8, damage: 1, color: 'blue' },
    GREEN_ENEMY:    { radiusX: 2, radiusY: 4, offset: 20, speed:-8, damage: 1, color: 'green' },
    ORANGE_ENEMY:   { radiusX: 1, radiusY: 6, offset: 20, speed:-8, damage: 2, color: 'orange' },
    RED_ENEMY:      { radiusX: 7, radiusY: 2, offset: 20, speed:-8, damage: 3, color: 'red' },
    DEFAULT_PLAYER: { radiusX: 1, radiusY: 4, offset: -20, speed: 8, damage: 1, color: 'yellow' } 
}

const ENEMIES = {
    DEFAULT_ENEMY:  { x, y, hp: 1, points: 10, radius: 10, velX: .9, velY: 1, avatarSrc: 'assets/img/blueE.png', bullet: BULLETS.DEFAULT_ENEMY },
    GREEN_ENEMY:    { x, y, hp: 2, points: 20, radius: 10, velX: .4, velY: 2, avatarSrc: 'assets/img/greenE.png', bullet: BULLETS.GREEN_ENEMY },
    ORANGE_ENEMY:   { x, y, hp: 3, points: 30, radius: 10, velX: .6, velY: 3, avatarSrc: 'assets/img/orangeE.png', bullet: BULLETS.ORANGE_ENEMY },
    RED_ENEMY:      { x, y, hp: 4, points: 40, radius: 10, velX: 1, velY: .6, avatarSrc: 'assets/img/redE.png', bullet: BULLETS.RED_ENEMY },
}
