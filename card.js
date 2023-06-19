console.clear();

//Variables for bookmark buttons
/*
const bookmarkButton1 = document.querySelector(
  '[data-js="card__bookmark-button1"]'
);
const bookmarkButton2 = document.querySelector(
  '[data-js="card__bookmark-button2"]'
);
const bookmarkButton3 = document.querySelector(
  '[data-js="card__bookmark-button3"]'
);
const bookmarkButton4 = document.querySelector(
  '[data-js="card__bookmark-button4"]'
);
const bookmarkButton5 = document.querySelector(
  '[data-js="card__bookmark-button5"]'
);
const bookmarkButton6 = document.querySelector(
  '[data-js="card__bookmark-button6"]'
);

//Add event listener for bookmark buttons

//variables for answer button

const showAnswerButton = document.querySelector(
  '[data-js="card__show-answer-button"]'
);

/*const showAnswerButton2 = document.querySelector(
  '[data.js="card__show-answer-button"]'
);
const showAnswerButton3 = document.querySelector(
  '[data.js="card__show-answer-button"]'
);
const showAnswerButton4 = document.querySelector(
  '[data.js="card__show-answer-button"]'
);
const showAnswerButton5 = document.querySelector(
  '[data.js="card__show-answer-button"]'
);
const showAnswerButton6 = document.querySelector(
  '[data.js="card__show-answer-button"]'
);
*/

//Add event listener for bookmark buttons

// const answertext = document.querySelector('[data-js="card__answer-text"]');

/* showAnswerButton.addEventListener("click", () => {
  answertext.classList.toggle("green-text");
}); */

/* document.getElementsByClassName("card__show-answer-button").onclick =
  function () {
    document.getElementsByClassName("card__answer-text").style.color = "green";
  };
*/

const showAnswerButton = document.querySelector(
  '[data-js="card__show-answer-button"]'
);

const answertext = document.querySelector('[data-js="answer-text"]');

showAnswerButton.addEventListener("click", () => {
  answertext.classList.add("red-color");
});
