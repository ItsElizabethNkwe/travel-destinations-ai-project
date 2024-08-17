function displayDestination(response) {
  new Typewriter("#destination", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateDestination(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a6d75acab03c9t5f772a4b01e13oe52b";
  let context =
    "You are a travel expert who likes to uncover hidden gems in every destination.";
  let prompt = `User instructions: Generate a Travel destination about ${instructionsInput.value}. Your mission is to generate a 4 line travel destination in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the travel destination. Sign the travel destination with 'SheCodes AI' inside a <strong></strong> element at the end of the travel destination and NOT at the beginning.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let destinationElement = document.querySelector("#destination");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="generating"> ⏳ Generating a Travel destination about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayDestination);
}

let destinationFormElement = document.querySelector(
  "#destination-generator-form"
);
destinationFormElement.addEventListener("submit", generateDestination);
