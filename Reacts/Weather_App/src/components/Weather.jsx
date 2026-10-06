
import "./Weather.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";
import humidity_icon from "../assets/humidity.png";
import { useEffect, useRef, useState } from "react";

const allIcons = {
  "01d": clear_icon,
  "01n": clear_icon,
  "02d": cloud_icon,
  "02n": cloud_icon,
  "03d": cloud_icon,
  "03n": cloud_icon,
  "04d": drizzle_icon,
  "04n": drizzle_icon,
  "09d": rain_icon,
  "09n": rain_icon,
  "10d": rain_icon,
  "10n": rain_icon,
  "13d": snow_icon,
  "13n": snow_icon,
};

const Weather = () => {
  const inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);

  const search = async (city) => {
    if (!city.trim()) {
      alert("Enter City Name");
      return;
    }
  };

  useEffect(() => {
    const loadInitialWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch weather");
        }

        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6),
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon: allIcons[data.weather[0].icon] || clear_icon,
        });
      } catch (error) {
        console.error("Initial weather fetch failed:", error);
      }
    };

    loadInitialWeather();
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search city"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search(inputRef.current.value);
            }
          }}
        />

        <img
          src={search_icon}
          alt="Search"
          onClick={() => search(inputRef.current.value)}
          style={{ cursor: "pointer" }}
        />
      </div>

      {weatherData && (
        <>
          <img
            src={weatherData.icon}
            alt="Weather condition"
            className="weather-icon"
          />

          <p className="temperature">
            {weatherData.temperature} °C
          </p>

          <p className="location">{weatherData.location}</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Humidity" />
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className="col">
              <img src={wind_icon} alt="Wind speed" />
              <div>
                <p>{weatherData.windSpeed} km/h</p>
                <span>Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
