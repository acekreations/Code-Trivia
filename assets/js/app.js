$(document).ready(function(){

  // VARIABLES
  // obj = questions, possible answers, correct answer
  // var = correct answers
  // var = incorrect answers
  // var = questions guessed
  var questions = {
    "What does CSS stand for?" : {
      options: ["Cascading Style Selector", "Cascading Style Sheet", "Correct Style Syntax", "Cool Style System"],
      answer: 1
    },
    "What role does Java play in JavaScript?" : {
      options: ["They are the same thing", "They can both be written in a .js file together", "Javascript is the cooler version of Java", "They aren't the same at all"],
      answer: 3
    },
    "When using Bootstrap you should always..." : {
      options: ["Give a shoutout to twitter", "Include CDN links to Bootstrap CSS and JS", "Forget that your using Bootstrap and write a bunch of CSS that Bootstrap already offers", "Build your own CSS grid system"],
      answer: 1
    },
    "If you have many repeating blocks of code what should you do?" : {
      options: ["Put each block into a function or object", "Continue painstakingly writing out massive amounts of unecessary code", "Hire someone to write your code for you", "Give up because you got lost in your own code"],
      answer: 0
    },
    "When is it a good idea to implement JQuery?" : {
      options: ["When you've forgotten how to write vanilla JS", "When your frequently manipulating the DOM", "When your feeling lazy", "When you can't get your vanilla JS to work"],
      answer: 1
    },
  };
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var numQuestionsAnswered = 0;
  var timeLeft =30;
  var currentQuestionNum = 0;
  var numOfQuestions = Object.keys(questions).length;
  var setCountdown;

  // FUNCTIONS
  // initialize game
  //   set correct, incorrect and guessed to zero
  //   call new question
  function initilizeGame() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    numQuestionsAnswered = 0;
    currentQuestionNum = 0;
    timeLeft = 30;
    $("#gameResults").empty();
    $("#startGameBtn").hide();
    $("#countdownTimerContainer").show();
    newQuestion();
  }


  // countdown timer
  //   count down for 30 secs
  //   if it hits zero
  //     incorrect answers++
  //     call out of time function
  function countdownTimer() {
    timeLeft = 30;
    setCountdown = setInterval(countdownExec, 1000)
  }

  function countdownExec() {
    if (timeLeft === 0) {
      $("#countdownTimer").text("0");
      outOfTime();
    }
    else {
      $("#countdownTimer").text(timeLeft);
      timeLeft--;
    }
  }

  // out of time
  //   get question value
  //   retrieve correct answer
  //   display correct answer by high lighting it and fading other answers
  //   setTimeOut
  //     call next question
  function outOfTime() {
    clearInterval(setCountdown);
    var questionVal = $("#question").attr("value");
    var displayCorrectAnswer = questions[questionVal].answer;
    displayCorrectAnswer++;
    $("#questionOptions button").addClass("disabled");
    $("#questionOptions button:nth-child(" + displayCorrectAnswer + ")").removeClass("disabled").addClass("btn-warning");
    setTimeout(newQuestion, 1000 * 3);
  }

  // new question
  //   if more questions
  //     pull next question (random?)
  //     load new question to page
  //     call countdown timer
  //   else
  //     load results
  function newQuestion() {
    $("#questionOptions").empty();
    if (currentQuestionNum < numOfQuestions) {
      countdownTimer();
      var newQuestionStr = Object.entries(questions)[currentQuestionNum];
      $("#questionArea").html("<h2 id='question' class='display-4 mb-4' value='" + newQuestionStr[0] + "'>" + newQuestionStr[0] + "</h2>");

      for (var i = 0; i < newQuestionStr[1].options.length; i++) {
        $("#questionOptions").append("<button type='button' class='btn btn-primary text-left p-3' value='" + newQuestionStr[1].options[i] + "'><i class='far fa-dot-circle'></i> " + newQuestionStr[1].options[i] + "</button>")
      }
      currentQuestionNum++;
    }
    else {
      $("#question, #questionOptions").empty();
      $("#countdownTimerContainer").hide();
      $("#startGameBtn").show();
      $("#gameResults").html("<p>Correct Answers: " + correctAnswers + "</p><p>incorrect Answers: " + incorrectAnswers + "</p><p>Questions Answered: " + numQuestionsAnswered + " of " + numOfQuestions + "</p>");
    }
  }

  // check answer
  //   questions guessed++
  //   check if correct
  //       correct answers++
  //       call new question
  //     else
  //       incorrect answers++
  //       call new question
  function checkAnswer(btnClicked) {
    clearInterval(setCountdown);
    numQuestionsAnswered++;

    var answerClicked = btnClicked.attr("value");
    console.log(answerClicked);
    var questionAsked = $("#question").attr("value");
    var answerArrayPos = questions[questionAsked].options.indexOf(answerClicked);
    console.log(answerArrayPos);
    if (answerArrayPos === questions[questionAsked].answer) {
      correctAnswers++;
      newQuestion();
    }
    else {
      incorrectAnswers++
      newQuestion();
    }
  }

  //
  // EXECUTION
  // start game button on click
  //   call initialize
  $("#startGameBtn").click(initilizeGame);

  // answer button on click
  //   get value of answer
  //   get value of question
  //   call check answer and pass value of answer and question
  $("#questionOptions").on("click", "button", function(){
    if (timeLeft !== 0) {
      var btnClicked = $(this);
      checkAnswer(btnClicked);
    }
  });


})
