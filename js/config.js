const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor='lightblue';
    width = 360,
    height = 400,
    speed = 3.4,
    friction = 0.94,
    radius = 10

let x = width/2,
    y = height/2,
    velY = 0,
    velX = 0,
    keys = [];
