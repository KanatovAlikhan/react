import React from "react";

function WeatherDisplay({ weather, error }) {
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!weather) {
    return <p>Enter a city to get weather info</p>;
  }

  const icon = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="weather-card">
      <h3>{weather.name}</h3>
      <img src={iconUrl} alt="weather icon" />
      <p style={{ fontSize: "24px", margin: "10px 0" }}>
        {Math.round(weather.main.temp)}°C
      </p>
      <p style={{ textTransform: "capitalize" }}>
        {weather.weather[0].description}
      </p>
    </div>
  );
}

export default WeatherDisplay;
