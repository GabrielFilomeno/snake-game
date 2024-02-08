
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