import "../src/styles/styles.css";
import WeatherApp from "./utils/app.js";

document.addEventListener("DOMContentLoaded", () => {
  const weatherApp = new WeatherApp();
  weatherApp.initialize();
});
