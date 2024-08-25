import fetchWeatherData from "./api.js";
import DOMManager from "./dom.js";
import { defaultLocation } from "./storage.js";

class WeatherApp {
  constructor(location = defaultLocation) {
    this.location = location;
  }

  async fetchAndDisplayWeather() {
    try {
      const weatherData = await fetchWeatherData(this.location);
      if (weatherData) {
        DOMManager.updateCurrentWeather(weatherData.currentConditions);
        DOMManager.updateForecast(weatherData.days);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  initialize() {
    this.fetchAndDisplayWeather();
  }
}

export default WeatherApp;
