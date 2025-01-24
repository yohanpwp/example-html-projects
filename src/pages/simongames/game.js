const buttonColor = ["red", "blue", "green", "yellow"];
let gamePattern = [];
const button = document.querySelectorAll(".btn");
let userChosenColor = [];
let title = document.getElementById("level-title");
let level = 0;
let gameStart = false;

function flashButton(button) {
  let myInterval = setInterval(() => {
    button.classList.add("pressed");
    setTimeout(function () {
      button.classList.remove("pressed");
    }, 500);
  }, 800);
  setTimeout(function () {
    clearInterval(myInterval);
  }, 1600);
}
function playSelector(selector) {
  let audio = document.createElement("audio");
  switch (selector) {
    case "red":
      audio.src = "sounds/red.mp3";
      audio.play();
      break;
    case "blue":
      audio.src = "sounds/blue.mp3";
      audio.play();
      break;
    case "green":
      audio.src = "sounds/green.mp3";
      audio.play();
      break;
    case "yellow":
      audio.src = "sounds/yellow.mp3";
      audio.play();
      break;
    case "wrong":
      audio.src = "sounds/wrong.mp3";
      audio.play();
      break;
    default:
      console.log("Invalid button");
      break;
  }
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStart = false;
  }

function nextSequence() {
  title.innerHTML = `Level ${level}`;
  userChosenColor = [];
  level++;
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  let randomChosenNumber = buttonColor[randomnumber];
  let selectedButton = document.getElementById(randomChosenNumber);
  flashButton(selectedButton);
  playSelector(selectedButton.id);
  gamePattern.push(randomChosenNumber);
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userChosenColor[currentLevel]) {
        if (userChosenColor.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000)};
  } else {
    playSelector("wrong");
    title.innerHTML = "Game Over, Press Any Key to Restart";
    startOver()
  }
}
button.forEach((button) =>
  button.addEventListener("click", function () {
    let buttonId = this.id;
    playSelector(buttonId);
    userChosenColor.push(buttonId);
    checkAnswer(userChosenColor.length - 1);
    })
);

document.addEventListener("keydown", function (event) {
  if (gameStart == false) {
    nextSequence();
    gameStart = true;
  }
});
