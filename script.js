var buttonsID = document.getElementById("buttons");
var buttonsClass = document.getElementsByClassName("buttons");
var question = document.getElementById("question");
var questionNumber = document.getElementById("questionNumber");
var startButton = document.getElementById("startButton");
var timer = document.getElementById("timer");

startButton.addEventListener("click", function () {
  countdown();
  question1();
});

function countdown() {
  var timeLeft = 61;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;

    if (timeLeft === 0) {
      timer.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  questionNumber.textContent = "Time is up!";
  question.textContent = "";
  startButton.style.display = "none";
}

function question1() {
  questionNumber.textContent = "Question 1";
  question.textContent = "Commonly used data types DO NOT include:";

  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  var btn3 = document.createElement("button");
  var btn4 = document.createElement("button");

  btn1.textContent = "strings";
  btn2.textContent = "booleans";
  btn3.textContent = "alerts";
  btn4.textContent = "numbers";

  buttonsID.appendChild(btn1);
  buttonsID.appendChild(btn2);
  buttonsID.appendChild(btn3);
  buttonsID.appendChild(btn4);

  startButton.style.display = "none";

  buttonsClass.addEventListener("click", function (event) {
    var answer = event.target;

    if ((answer = btn2)) {
      console.log(answer);
    }
  });
}
