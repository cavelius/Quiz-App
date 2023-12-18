console.log("test on the form.js");

const formfield = document.querySelector('[js-data="form"]');
const submit = document.querySelector('[js-data="submitbtn"]');
const main = document.querySelector('[js-data="main"]');
const MAX_CHARACTERS = 150;
const characterLeftElement = document.querySelector(
  '[js-data="remaining-characters"]'
);

const characterLeftElementanswer = document.querySelector(
  '[js-data="remaining-charactersanswer"]'
);

formfield.addEventListener("submit", (e) => {
  e.preventDefault();
  const formElements = e.target.elements;

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const tag = data.tag;
  const arrayTag = tag.split(" ");
  console.log(arrayTag[0]);

  console.log(formElements.yourquestion);
  console.log("Inhalt Frage:", formElements.yourquestion.value);
  console.log("Inhalt Antwort:", formElements.youranswer.value);
  console.log("Tag inhalt", formElements.tag);

  const card = document.createElement("div");
  card.classList.add(".card");
  card.innerHTML = `<article class="card">
        <section class="card__main">
            <p class="question">${formElements.yourquestion.value}</p>
            <button class="btn" data-js="btn">show answer</button>
            <p class="answer" data-js="answer">${formElements.youranswer.value}</p>
        </section>
        <div class="bookmark-container" data-js="bookmark-container">
            <img class="bookmark" data-js="bookmarkPicture" src="css/img/bookmark.png" alt="bookmark" />
        </div>
        <ul class="categories">
            <li class="categories__html">#${arrayTag[0]}</li>
            <li class="categories__flexbox">#${arrayTag[1]}</li>
            <li class="categories__css">#${arrayTag[2]}</li>
            </ul>
            </article>`;
  main.appendChild(card);

  // add event listener to btn
  const btn = document.querySelector('[data-js="btn"]');
  const answer = document.querySelector('[data-js="answer"]');
  let answerIsHide = false;
  console.log("add event listener to btn");

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

  const bookmarkcontainer = document.querySelector(
    '[data-js="bookmark-container"]'
  );
  const bookmarkPicture = document.querySelector('[data-js="bookmarkPicture"]');
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
});

const messageInput = document.querySelector('[js-data="yourquestion"]');
messageInput.addEventListener("input", (e) => {
  console.log("Press");
  console.log("What I type: ", e.target.value.length);
  characterLeftElement.textContent =
    MAX_CHARACTERS - parseInt(e.target.value.length);
});

const messageInputanswer = document.querySelector('[js-data="youranswer"]');
messageInputanswer.addEventListener("input", (e) => {
  console.log("Press");
  console.log("What I type: ", e.target.value.length);
  characterLeftElementanswer.textContent =
    MAX_CHARACTERS - parseInt(e.target.value.length);
});