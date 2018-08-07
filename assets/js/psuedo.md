VARIABLES
obj = questions, possible answers, correct answer
var = correct answers
var = incorrect answers
var = questions guessed


FUNCTIONS
initialize game
  set correct, incorrect and guessed to zero
  call new question

countdown timer
  count down for 30 secs
  if it hits zero
    incorrect answers++
    call out of time function

out of time
  get question value
  retrieve correct answer
  display correct answer by high lighting it and fading other answers
  setTimeOut
    call next question

new question
  if more questions
    pull next question (random?)
    load new question to page
    call countdown timer
  else
    load results

check answer
  questions guessed++
  check if correct
      correct answers++
      call new question
    else
      incorrect answers++
      call new question


EXECUTION
start game button on click
  call initialize

answer button on click
  get value of answer
  get value of question
  call check answer and pass value of answer and question
