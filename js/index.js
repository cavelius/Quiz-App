console.log("test");

const bookmarkcontainer = document.querySelector(
  '[data-js="bookmark-container"]'
);
const bookmarkPicture = document.querySelector('[data-js="bookmarkPicture"]');

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
