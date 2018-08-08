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
    "How does Java play a roll in JavaScript?" : {
      options: ["They are the same thing", "They can both be written in a .js file together", "Javascript is the cooler version of Java", "They aren't the same at all"],
      answer: 3
    },
    "When using Bootstrap you should always.." : {
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
  var correctAnsers = 0;
  var incorrectAnswers = 0;
  var numQuestionsAnswered = 0;
  var timeLeft = 30;

  // FUNCTIONS
  // initialize game
  //   set correct, incorrect and guessed to zero
  //   call new question
  function initilizeGame() {
    correctAnsers = 0;
    incorrectAnswers = 0;
    numQuestionsAnswered = 0;
    timeLeft = 30;
    newQuestion();
  }


  // countdown timer
  //   count down for 30 secs
  //   if it hits zero
  //     incorrect answers++
  //     call out of time function
  function countdownTimer() {
    var setCountdown = setIterator(countdownExec, 1000)
  }

  function countdownExec() {
    timeLeft--;
    if (timeLeft === 0) {
      outOfTime();
    }
    else {
      $("#countdownTimer").text(timeLeft);
    }
  }

  // out of time
  //   get question value
  //   retrieve correct answer
  //   display correct answer by high lighting it and fading other answers
  //   setTimeOut
  //     call next question
  function outOfTime() {
    var questionVal = $("#question").val();
    var correctAnser = questions[questionVal].answer;
    $("#questionOptions:nth-child(" + correctAnser++ + ")").addClass("bg-warning");
    setTimeOut(newQuestion, 1000 * 2);
  }

  // new question
  //   if more questions
  //     pull next question (random?)
  //     load new question to page
  //     call countdown timer
  //   else
  //     load results
  function newQuestion() {

  }

  // check answer
  //   questions guessed++
  //   check if correct
  //       correct answers++
  //       call new question
  //     else
  //       incorrect answers++
  //       call new question
  //
  //
  // EXECUTION
  // start game button on click
  //   call initialize
  $("#startGameBtn").click(initilizeGame);

  // answer button on click
  //   get value of answer
  //   get value of question
  //   call check answer and pass value of answer and question



})
