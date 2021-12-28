var quizArea = document.getElementById("quizArea");
var startButton = document.getElementById("startButton");
var timer = document.getElementById("timer");

startButton.addEventListener("click", function () {
  countdown();
});

function countdown() {
  var timeLeft = 61;

  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;
    question1();

    if (timeLeft === 0) {
      timer.textContent = "";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  alert("Time is over!");
}

function question1() {
  quizArea.textContent = "Question 1";
}
