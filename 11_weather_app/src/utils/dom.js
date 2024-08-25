class DOMManager {
  static updateCurrentWeather({ location, temp, icon }) {
    // Update the current weather details in the DOM
    document.getElementById("location").textContent = location;
    document.getElementById("current-temp-number").textContent = temp;
    document.getElementById("current-temp-unit").textContent = "°C";
    document.getElementById("current-weather-icon").src =
      `../src/assets/icons/${icon}.svg`;
  }

  static updateForecast(forecastData) {
    // Limit to the first 5 days of forecast data
    const forecastToDisplay = forecastData.slice(1, 6);
    const forecastContainers = document.querySelectorAll(".forecast-container");

    forecastContainers.forEach((container, index) => {
      console.log(index);
      const data = forecastToDisplay[index];
      if (data) {
        console.log(data);
        const dayElement = container.querySelector(".forecast-day");
        const tempElement = container.querySelector(".forecast-temp");
        const iconElement = container.querySelector(".forecast-icon img");

        if (dayElement && tempElement && iconElement) {
          dayElement.textContent = data.day;
          tempElement.textContent = data.temp;
          iconElement.src = `../src/assets/icons/${data.icon}.svg`;
        } else {
          console.error(
            "Forecast element missing in container:",
            container,
            `${data.icon}`
          );
        }
      } else {
        // Clear out data if there's no corresponding data (e.g., hide extra containers)
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
