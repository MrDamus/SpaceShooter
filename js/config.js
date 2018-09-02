const FONT_NAME = 'kong';
const startingHP = 10;

let spawnEnemyInterval = 3600;
let spawnEnemyBulletInterval = 2000;

let player;
let gameInProgress = true;
let score = 0;
let enemiesInterval;

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

const SOUNDS = {
    pew: document.getElementById('sound_pew'),
}


const BULLETS = {
    DEFAULT_ENEMY:  { radiusX: 1, radiusY: 3, offset: 20, speed:-8, damage: 1 },
    DEFAULT_PLAYER: { radiusX: 1, radiusY: 3, offset: -20, speed: 8, damage: 1 } 
    // rozne rysowania, rozne funkcje
}

const ENEMIES = {
    DEFAULT_ENEMY:  { x, y, hp: 1, points: 10, radius: 9, velX: 1, velY: 1, avatarSrc: 'assets/img/blueE.png',  },
    GREEN_ENEMY:    { x, y, hp: 2, points: 20, radius: 9, velX: 1, velY: 2, avatarSrc: 'assets/img/greenE.png',  },
    ORANGE_ENEMY:   { x, y, hp: 3, points: 30, radius: 9, velX: 1, velY: 3, avatarSrc: 'assets/img/orangeE.png',  },
    RED_ENEMY:      { x, y, hp: 4, points: 40, radius: 9, velX: 1, velY: .5, avatarSrc: 'assets/img/redE.png',  },
}
