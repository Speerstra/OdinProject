// Access the API key from the injected environment variable
const apiKey = process.env.API_KEY;

console.log(`Your API key is: ${apiKey}`);

const element = document.getElementById("some-element-id");
if (element) {
  element.innerHTML = `Your API key is: ${apiKey}`;
}
