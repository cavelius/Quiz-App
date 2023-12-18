console.log("test");

const bookmarkcontainer = document.querySelector(
  '[data-js="bookmark-container"]'
);
const bookmarkPicture = document.querySelector('[data-js="bookmarkPicture"]');
const btn = document.querySelector('[data-js="btn"]');
const answer = document.querySelector('[data-js="answer"]');

console.log(btn);
console.log(bookmarkPicture);
console.log(bookmarkcontainer);

let questionCardBookmarked = false;

bookmarkcontainer.addEventListener("click", () => {
  console.log("clicked");
  if (questionCardBookmarked) {
    bookmarkPicture.src = "css/img/bookmark.png";
  } else {
    bookmarkPicture.src = "css/img/bookmark_filled.png";
  }
  questionCardBookmarked = !questionCardBookmarked;
});

// answer button

let answerIsHide = false;

btn.addEventListener("click", () => {
  console.log("btn is clicked");
  answer.classList.toggle("answerVisible");

  if (answerIsHide) {
    btn.textContent = "show answer";
  } else {
    btn.textContent = "hide answer";
  }
  answerIsHide = !answerIsHide;
});
