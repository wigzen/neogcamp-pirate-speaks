let tobeTranslate = document.getElementById("t1");
let translated = document.getElementById("t2");
let submit = document.getElementById("submit");
const URL = "https://api.funtranslations.com/translate/pirate.json?text=";
submit.addEventListener("click", getTranslated);
function getTranslated() {
  fetch(URL + tobeTranslate.value)
    .then((response) => response.json())
    .then((data) => {
      translated.textContent = data.contents.translated;
    });
}
