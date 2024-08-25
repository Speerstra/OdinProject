import { getDayOfWeek } from "./date.js";

class DOMManager {
  static updateLocation(location) {
    document.getElementById("location").textContent = location;
  }

  static updateCurrentWeather({ temp, icon }) {
    document.getElementById("current-temp-number").textContent =
      Math.round(temp);
    document.getElementById("current-temp-unit").textContent = "°C";
    document.getElementById("current-weather-icon").src =
      `../src/assets/icons/${icon}.svg`;
  }

  static updateForecast(forecastData) {
    const forecastToDisplay = forecastData.slice(1, 6);
    const forecastContainers = document.querySelectorAll(".forecast-container");

    forecastContainers.forEach((container, index) => {
      const data = forecastToDisplay[index];
      if (data) {
        const dayElement = container.querySelector(".forecast-day");
        const tempElement = container.querySelector(".forecast-temp");
        const iconElement = container.querySelector(".forecast-icon img");

        if (dayElement && tempElement && iconElement) {
          dayElement.textContent = getDayOfWeek(data.datetime);
          tempElement.textContent = Math.round(data.temp);
          iconElement.src = `../src/assets/icons/${data.icon}.svg`;
        } else {
          console.error(
            "Forecast element missing in container:",
            container,
            `${data.icon}`
          );
        }
      } else {
        const dayElement = container.querySelector(".forecast-day");
        const tempElement = container.querySelector(".forecast-temp");
        const iconElement = container.querySelector(".forecast-icon img");

        if (dayElement) dayElement.textContent = "";
        if (tempElement) tempElement.textContent = "";
        if (iconElement) iconElement.src = "";
      }
    });
  }
}

export default DOMManager;
