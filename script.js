var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var buttonsID = document.getElementById("buttons");
var question = document.getElementById("question");
var questionNumber = document.getElementById("questionNumber");
var score = 0;
var startButton = document.getElementById("startButton");
var scoreTable = document.getElementById("scoreTable");
var scoreValues = [];
var timer = document.getElementById("timer");
var timeInterval;
var timeLeft;
var userInitials;
var userScores;

startButton.addEventListener("click", function () {
  score = 0;
  startButton.style.display = "none";
  question.style.display = "initial";
  btn1.style.display = "initial";
  btn2.style.display = "initial";
  btn3.style.display = "initial";
  btn4.style.display = "initial";
  scoreTable.style.display = "none";
  countdown();
  question1();
});

function countdown() {
  timeLeft = 61;

  timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "Time: " + timeLeft;

    if (timeLeft <= 0) {
      timer.textContent = "";
      clearInterval(timeInterval);
      timeUp();
    }
  }, 1000);
}

function question1() {
  questionNumber.textContent = "Question 1";
  question.textContent = "Commonly used data types DO NOT include:";

  btn1.textContent = "strings";
  btn2.textContent = "booleans";
  btn3.textContent = "alerts";
  btn4.textContent = "numbers";

  buttonsID.appendChild(btn1);
  buttonsID.appendChild(btn2);
  buttonsID.appendChild(btn3);
  buttonsID.appendChild(btn4);

  buttonsID.addEventListener("click", function handleAnswer1(event) {
    var answer = event.target.textContent;

    if (answer == btn3.textContent) {
      alert("Correct!");
      buttonsID.removeEventListener("click", handleAnswer1);
      score = score + 20;
      question2();
    } else {
      alert("Incorrect! You've lost 10 seconds!");
      buttonsID.removeEventListener("click", handleAnswer1);
      timeLeft = timeLeft - 10;
      question2();
    }
  });
}

function question2() {
  questionNumber.textContent = "Question 2";
  question.textContent =
    "The condition of an if/else statement is enclosed within:";

  btn1.textContent = "quotes";
  btn2.textContent = "curly brackets";
  btn3.textContent = "parenthesis";
  btn4.textContent = "square brackets";

  buttonsID.addEventListener("click", function handleAnswer2(event) {
    var answer = event.target.textContent;

    if (answer == btn3.textContent) {
      alert("Correct!");
      buttonsID.removeEventListener("click", handleAnswer2);
      score = score + 20;
      question3();
    } else {
      alert("Incorrect! You've lost 10 seconds!");
      buttonsID.removeEventListener("click", handleAnswer2);
      timeLeft = timeLeft - 10;
      question3();
    }
  });
}

function question3() {
  questionNumber.textContent = "Question 3";
  question.textContent = "How does JavaScript store dates?";

  btn1.textContent = "the number of milliseconds since 01/01/1970";
  btn2.textContent = "the number of hours since 01/01/2000";
  btn3.textContent = "the number of days since 01/01/1900";
  btn4.textContent = "none of the above";

  buttonsID.addEventListener("click", function handleAnswer3(event) {
    var answer = event.target.textContent;

    if (answer === btn1.textContent) {
      alert("Correct!");
      buttonsID.removeEventListener("click", handleAnswer3);
      score = score + 20;
      question4();
    } else {
      alert("Incorrect! You've lost 10 seconds!");
      buttonsID.removeEventListener("click", handleAnswer3);
      timeLeft = timeLeft - 10;
      question4();
    }
  });
}

function question4() {
  questionNumber.textContent = "Question 4";
  question.textContent = "Arrays in JavScript can be used to store:";

  btn1.textContent = "numbers and strings";
  btn2.textContent = "other arrays";
  btn3.textContent = "booleans";
  btn4.textContent = "all of the above";

  buttonsID.addEventListener("click", function handleAnswer4(event) {
    var answer = event.target.textContent;

    if (answer === btn4.textContent) {
      alert("Correct!");
      buttonsID.removeEventListener("click", handleAnswer4);
      score = score + 20;
      question5();
    } else {
      alert("Incorrect! You've lost 10 seconds!");
      buttonsID.removeEventListener("click", handleAnswer4);
      timeLeft = timeLeft - 10;
      question5();
    }
  });
}

function question5() {
  questionNumber.textContent = "Question 5";
  question.textContent = "Inside what type of element do you put JavaScript?";

  btn1.textContent = "<js>";
  btn2.textContent = "<script>";
  btn3.textContent = "<javascript>";
  btn4.textContent = "none of the above";

  buttonsID.addEventListener("click", function handleAnswer5(event) {
    var answer = event.target.textContent;

    if (answer === btn2.textContent) {
      alert("Correct!");
      buttonsID.removeEventListener("click", handleAnswer5);
      score = score + 20;
      finalScore();
    } else {
      alert("Incorrect! You've lost 10 seconds!");
      buttonsID.removeEventListener("click", handleAnswer5);
      timeLeft = timeLeft - 10;
      finalScore();
    }
  });
}

function finalScore() {
  questionNumber.textContent = "";
  question.textContent = "";
  startButton.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "none";
  var initials = prompt(
    "You got " + score + " out of 100! Enter your initials to keep your score!"
  );
  if (initials === "") {
    alert("Please enter at least one letter");
    finalScore();
    return;
  }
  scoreValues.push(initials + ": " + score);
  allScores();
}

function timeUp() {
  questionNumber.textContent = "";
  question.textContent = "";
  startButton.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "none";
  var initials = prompt(
    "Time is up! You got " +
      score +
      " out of 100! Enter your initials to keep your score!"
  );
  if (initials === "") {
    alert("Please enter at least one letter");
    finalScore();
    return;
  }
  scoreValues.push(initials + ": " + score);
  allScores();
}

function allScores() {
  timer.textContent = "";
  clearInterval(timeInterval);
  questionNumber.textContent = "High Scores";
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  btn4.style.display = "none";
  question.style.display = "none";
  startButton.style.display = "initial";
  scoreTable.style.display = "initial";
  for (var i = 0; i < scoreValues.length; i++) {
    console.log(scoreValues);
    scoreTable.innerHTML = scoreValues.join("<br/>");
  }
  startButton.textContent = "Retake Quiz";
}
