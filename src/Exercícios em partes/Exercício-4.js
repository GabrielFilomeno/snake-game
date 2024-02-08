
// --------> Exércicio 1 <--------

let canvas = document.getElementById("snakeHead");
let context = canvas.getContext("2d");
let box = 32;

let snakeHead = [];
snakeHead[0] = {
    x: 8 * box,
    y: 8 * box
};

snakeHead[1] = {
    x: 7 * box,
    y: 8 * box
};

snakeHead[2] = {
    x: 6 * box,
    y: 8 * box
};

let direction = "right";

let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// --------> Exércicio 2 <--------

function createBG() {
    context.fillStyle = "white";
    context.fillRect(0,0,16 * box, 16 * box);
}

// --------> Exércicio 3 <--------

function createsnakeHead() {

    for (i = 0; i < snakeHead.length; i++) {

        var imgHead = new Image();

        if( direction == "right") imgHead.src= "img/cabecaCobra1.png";
        if (direction == "left") imgHead.src= "img/cabecaCobra2.png";
        if (direction == "up") imgHead.src= "img/cabecaCobra3.png";
        if (direction == "down") imgHead.src= "img/cabecaCobra4.png";
        context.drawImage(imgHead, snakeHead[0].x, snakeHead[0].y, box, box);

        var imgBody = new Image();

        if( direction == "right") imgBody.src= "img/corpoCobra.png";
        if (direction == "left") imgBody.src= "img/corpoCobra.png";
        if (direction == "up") imgBody.src= "img/corpoCobra1.png";
        if (direction == "down") imgBody.src= "img/corpoCobra1.png";
        context.drawImage(imgBody, snakeHead[i].x, snakeHead[i].y, box, box);
       
    };
}

function createCalda() {

    let lastIndex = snakeHead.length -1;

    var imgCalda = new Image();

    if( direction == "right") imgCalda.src= "img/caldaCobra1.png";
    if (direction == "left") imgCalda.src= "img/caldaCobra2.png";
    if (direction == "up") imgCalda.src= "img/caldaCobra3.png";
    if (direction == "down") imgCalda.src= "img/caldaCobra4.png";
    context.drawImage(imgCalda, snakeHead[lastIndex].x, snakeHead[lastIndex].y, box, box);
}

// --------> Exércicio 4 <--------


function createFood() {
    var imgFood = new Image();
    imgFood.src= "img/food.png";
    context.drawImage(imgFood, food.x, food.y, box, box);
}