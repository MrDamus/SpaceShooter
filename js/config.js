const canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
    canvas.style.backgroundColor='lightblue';


let width = 360,
    height = 400,
    x = width/2,
    y = height/2,
    radius = 10,
    velY = 0,
    velX = 0,
    speed = 3.4,
    friction = 0.94,
    keys = [];

// TODO: podzielic na const i let