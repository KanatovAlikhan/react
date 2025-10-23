import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const cities = [
  { name: "New York", country: "USA" },
  { name: "London", country: "UK" },
  { name: "Paris", country: "France" },
  { name: "Tokyo", country: "Japan" },
  { name: "Dubai", country: "UAE" },
  { name: "Moscow", country: "Russia" },
  { name: "Sydney", country: "Australia" },
  { name: "Toronto", country: "Canada" },
  { name: "Mexico City", country: "Mexico" },
  { name: "Beijing", country: "China" },
  { name: "Mumbai", country: "India" },
  { name: "Rio de Janeiro", country: "Brazil" },
  { name: "Cape Town", country: "South Africa" },
  { name: "Rome", country: "Italy" },
  { name: "Istanbul", country: "Turkey" },
  { name: "Berlin", country: "Germany" },
  { name: "Bangkok", country: "Thailand" },
  { name: "Los Angeles", country: "USA" },
  { name: "Buenos Aires", country: "Argentina" },
  { name: "Seoul", country: "South Korea" },
];

const API_KEY = "e6075b8b3fca59799f60498c08beca21";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState(null);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const data = await Promise.all(
        cities.map(async (city) => {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${API_KEY}&units=metric`
          );
          const result = await res.json();
          return { ...city, ...result };
        })
      );
      setWeatherData(data);
      setFilteredData(data);
      setLoading(false);
    };
    fetchWeather();
  }, []);

  const filterByWeather = (type) => {
    setFilter(type);
    if (type === "all") {
      setFilteredData(weatherData);
    } else {
      const filtered = weatherData.filter((city) => {
        const main = city.weather && city.weather[0]?.main?.toLowerCase();
        if (type === "sunny") return main === "clear";
        if (type === "rainy") return main === "rain";
        if (type === "snowy") return main === "snow";
        if (type === "cloudy") return main === "clouds";
        return false;
      });
      setFilteredData(filtered);
    }
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);
    const value = e.target.value.trim();

    if (value === "") {
      setSearchResult(null);
      setSearching(false);
      setFilteredData(weatherData);
      return;
    }

    setSearching(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setSearchResult(data);
      } else {
        setSearchResult("not found");
      }
    } catch (err) {
      console.error(err);
      setSearchResult("not found");
    }
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4 fw-bold">Global Weather Dashboard</h1>

      <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
        <button
          className={`btn btn-${filter === "all" ? "primary" : "outline-primary"}`}
          onClick={() => filterByWeather("all")}
        >
          Все
        </button>
        <button
          className={`btn btn-${filter === "sunny" ? "warning" : "outline-warning"}`}
          onClick={() => filterByWeather("sunny")}
        >
          Солнечно
        </button>
        <button
          className={`btn btn-${filter === "cloudy" ? "secondary" : "outline-secondary"}`}
          onClick={() => filterByWeather("cloudy")}
        >
          Облачно
        </button>
        <button
          className={`btn btn-${filter === "rainy" ? "info" : "outline-info"}`}
          onClick={() => filterByWeather("rainy")}
        >
          Дождь
        </button>
        <button
          className={`btn btn-${filter === "snowy" ? "light" : "outline-light"}`}
          onClick={() => filterByWeather("snowy")}
        >
          Снег
        </button>
      </div>

      <input
        type="text"
        className="form-control mb-4"
        placeholder=" Поиск города..."
        value={search}
        onChange={handleSearch}
      />

      {loading ? (
        <p className="text-center">Загрузка данных...</p>
      ) : searching ? (
        searchResult === "not found" ? (
          <p className="text-center">Город не найден</p>
        ) : searchResult ? (
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{searchResult.name}</h5>
                  <p className="text-muted">{searchResult.sys?.country}</p>
                  <p>{searchResult.weather[0].description.toUpperCase()}</p>
                  <h3>{Math.round(searchResult.main?.temp)}°C</h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">Введите название города...</p>
        )
      ) : filteredData.length === 0 ? (
        <p className="text-center">Нет данных</p>
      ) : (
        <div className="row">
          {filteredData.map((city, index) => (
            <div key={index} className="col-md-3 mb-4">
              <div className="card shadow-sm border-0 text-center">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{city.name}</h5>
                  <p className="text-muted">{city.country}</p>
                  {city.weather && (
                    <>
                      <p>{city.weather[0].description.toUpperCase()}</p>
                      <h3>{Math.round(city.main?.temp)}°C</h3>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
