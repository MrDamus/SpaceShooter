const FONT_NAME = 'kong';
const startingHP = 10;

let spawnEnemyInterval = 3600;
let spawnEnemyBulletInterval = 2000;

let player;
let gameInProgress = true;
let score = 0;
let enemiesInterval;

const scoreWrapper = document.getElementById("score");
scoreWrapper.innerHTML = "Score: " + score;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
    // canvas.style.backgroundColor='#2F2E2E';
    canvas.style.backgroundColor='darkgrey';

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
    DEFAULT_ENEMY: { radius: 1, offset: 20, speed:-10, damage: 1 },
    DEFAULT_PLAYER: { radius: 1, offset: -20, speed: 10, damage: 1 } 
    // rozne rysowania, rozne funkcje
}

const ENEMIES = {
    DEFAULT_ENEMY: { x, y, hp: 3, points: 10, avatarSrc: '../assets/img/blueE.png', radius: 10 },
    GREEN_ENEMY: { x ,y, hp: 4, points: 20, avatarSrc: '../assets/img/greenE.png', radius: 10 },
    ORANGE_ENEMY: { x ,y, hp: 5, points: 30, avatarSrc: '../assets/img/orangeE.png', radius: 10 },
    RED_ENEMY: { x ,y, hp: 6, points: 40, avatarSrc: '../assets/img/redE.png', radius: 10 },
}
