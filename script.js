// Declaring Variables and constants here --

let direction = { x: 0, y: 0 };
const foodSound = new Audio("food.mp3");
const gameOverSound = new Audio("gameover.mp3");
const musicSound = new Audio("music.mp3");
const moveSound = new Audio("move.mp3");
const speed = 2;
let lastPaintTime = 0;
let snakeArr = [{ x: 5, y: 8 }];
food = { x: 15, y: 13 };

// All the Functions related to Game --

function main(ctime) {
  window.requestAnimationFrame(main); //callback function. requestAnimationFrame used in place of setTimeout fun
  // main will call ctime and ctime will call main repeatedly to get a non-laggy and smooth fps running game.
  console.log(ctime);
  if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
    // this is used for reducing the fps in accordance to the game parameter.
    // because the callback functns are calling each other too fast. It would be tough to play the game.
    // So we are reducing the fps by dividing by 1000.
    return;
  }
  lastPaintTime = ctime;

  gameEngine();
}

function gameEngine() {
  // part 1 :  snake array ko update krenge and food render krrenge

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
      break;

    case "ArrowDown":
      console.log("ArrowDown");
      break;

    case "ArrowLeft":
      console.log("ArrowLeft");
      break;

    case "ArrowRight":
      console.log("ArrowRight");
      break;

    default:
      break;
  }
});
