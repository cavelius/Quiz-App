console.log("test");

const bookmark = document.querySelector('[data-js="bookmark"]');
console.log(bookmark);

const bookmarkContainer = document.querySelector(
  '[data-js="bookmark-container"]'
);
console.log(bookmarkContainer);

bookmark.addEventListener("click", () => {
  console.log("is clicked");

  const filledBookmark = document.createElement("div");
  filledBookmark.classList.add(".bookmark");
  filledBookmark.innerHTML = `<img class="bookmark" data-js="bookmark" src="css/img/bookmark_filled.png"alt="bookmark-filled"/>`;
  bookmarkContainer.appendChild(filledBookmark);
});
