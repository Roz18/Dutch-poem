function displayPoem(response) {
  console.log(response.data.answer);

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = response.data.answer.replace(/\n/g, "<br>");
}

let apiKey = "32ecda5bta3bd6bc964176affb080o6a";
let context = "Please provide a short, reflective poem that celebrates Dutch culture.";

function getPoem() {
  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "🌷🌷🌷🌷 Generating poem…";

  let userWord = document.querySelector("#user-instructions").value.trim();

  if (!userWord) {
    poemElement.innerHTML = "Please enter a word to inspire the poem!";
    return;
  }

  let prompt = `A poem that is related to "${userWord}" and Dutch culture.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#poem-generator-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  getPoem();
});