// Declaring Variables and constants here --

let inputDir = { x: 0, y: 0 };
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const musicSound = new Audio("../music/music.mp3");
const moveSound = new Audio("../music/move.mp3");
const speed = 2;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 5, y: 8 }];
food = { x: 15, y: 13 };

// All the Functions related to Game --

function main(ctime) {
  window.requestAnimationFrame(main); //callback function. requestAnimationFrame used in place of setTimeout fun
  // main will call ctime and ctime will call main repeatedly to get a non-laggy and smooth fps running game.
  //   console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    // this is used for reducing the fps in accordance to the game parameter.
    // because the callback functns are calling each other too fast. It would be tough to play the game.
    // So we are reducing the fps by dividing by 1000.
    return;
  }
  lastPaintTime = ctime;

  gameEngine();
}

function isCollide(sarr) {
  return false;
}

function gameEngine() {
  // part 1 :  snake array ko update krenge and food render krrenge
  if (isCollide(sarr)) {
    // if snake collide with the boundary or self collision, then play gameover sound and reset the snake and initial game values.
    gameOverSound.play();
    musicSound.pause();
    inputDir = { x: 0, y: 0 };
    alert("Game over. Press any key to PLAY AGAIN !");
    snakeArr = [{ x: 5, y: 8 }];
    musicSound.play();
    score = 0;
  }

  // if snake eats the food then we will have to increase the snake's body and randomly generate the food item in the board.
  if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
    snakeArr.unshift({
      x: snakeArr[0].x + inputDir.x,
      y: snakeArr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }
  // part 2 : displaying snake

  board.innerHTML = "";
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake"); // if game is starting and index is 0 then head will be shown
      // or else game has already been started and snake class will be added.
    }
    board.appendChild(snakeElement);
  });

  //  part 3 : Displaying the Food item.

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Game Logics --
window.requestAnimationFrame(main);
window.addEventListener("keydown", (e) => {
  // initialising keyboard event listener.
  inputDir = { x: 0, y: 1 }; //Game starts as soon as someone presses arrow keys
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;

    default:
      break;
  }
});
