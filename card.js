console.clear();
// variables for showAnswerButton

const showAnswerButton1 = document.querySelector(
  '[data-js="card__show-answer-button1"]'
);
const showAnswerButton2 = document.querySelector(
  '[data-js="card__show-answer-button2"]'
);
const showAnswerButton3 = document.querySelector(
  '[data-js="card__show-answer-button3"]'
);
const showAnswerButton4 = document.querySelector(
  '[data-js="card__show-answer-button4"]'
);
const showAnswerButton5 = document.querySelector(
  '[data-js="card__show-answer-button5"]'
);
const showAnswerButton6 = document.querySelector(
  '[data-js="card__show-answer-button6"]'
);

//variables for answerText

const answertext1 = document.querySelector('[data-js="answer-text1"]');
const answertext2 = document.querySelector('[data-js="answer-text2"]');
const answertext3 = document.querySelector('[data-js="answer-text3"]');
const answertext4 = document.querySelector('[data-js="answer-text4"]');
const answertext5 = document.querySelector('[data-js="answer-text5"]');
const answertext6 = document.querySelector('[data-js="answer-text6"]');

// add eventlistener to show answer

showAnswerButton1.addEventListener("click", () => {
  answertext1.classList.toggle("lightseagreen");

  if (answertext1.classList.contains("lightseagreen")) {
    showAnswerButton1.textContent = "Hide Answer";
  } else {
    showAnswerButton1.textContent = "Show Answer";
  }
});

showAnswerButton2.addEventListener("click", () => {
  answertext2.classList.toggle("lightseagreen");

  if (answertext2.classList.contains("lightseagreen")) {
    showAnswerButton2.textContent = "Hide Answer";
  } else {
    showAnswerButton2.textContent = "Show Answer";
  }
});

showAnswerButton3.addEventListener("click", () => {
  answertext3.classList.toggle("lightseagreen");

  if (answertext3.classList.contains("lightseagreen")) {
    showAnswerButton3.textContent = "Hide Answer";
  } else {
    showAnswerButton3.textContent = "Show Answer";
  }
});

showAnswerButton4.addEventListener("click", () => {
  answertext4.classList.toggle("lightseagreen");

  if (answertext4.classList.contains("lightseagreen")) {
    showAnswerButton4.textContent = "Hide Answer";
  } else {
    showAnswerButton4.textContent = "Show Answer";
  }
});

showAnswerButton5.addEventListener("click", () => {
  answertext5.classList.toggle("lightseagreen");

  if (answertext5.classList.contains("lightseagreen")) {
    showAnswerButton5.textContent = "Hide Answer";
  } else {
    showAnswerButton5.textContent = "Show Answer";
  }
});

showAnswerButton6.addEventListener("click", () => {
  answertext6.classList.toggle("lightseagreen");

  if (answertext6.classList.contains("lightseagreen")) {
    showAnswerButton6.textContent = "Hide Answer";
  } else {
    showAnswerButton6.textContent = "Show Answer";
  }
});

//variables for bookmark

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

// add eventlistener to bookmarks

bookmarkButton1.addEventListener("click", () => {
  bookmarkButton1.classList.toggle("teal");
});
bookmarkButton2.addEventListener("click", () => {
  bookmarkButton2.classList.toggle("teal");
});
bookmarkButton3.addEventListener("click", () => {
  bookmarkButton3.classList.toggle("teal");
});
bookmarkButton4.addEventListener("click", () => {
  bookmarkButton4.classList.toggle("teal");
});
bookmarkButton5.addEventListener("click", () => {
  bookmarkButton5.classList.toggle("teal");
});
bookmarkButton6.addEventListener("click", () => {
  bookmarkButton6.classList.toggle("teal");
});
