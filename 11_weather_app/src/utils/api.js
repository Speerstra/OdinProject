import { defaultLocation } from "./storage.js";

async function fetchWeatherData(location = defaultLocation) {
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error(
      "API key is missing. Please set the API_KEY environment variable."
    );
    return;
  }

  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=days,current&key=${apiKey}&contentType=json`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    throw error;
  }
}

export default fetchWeatherData;
