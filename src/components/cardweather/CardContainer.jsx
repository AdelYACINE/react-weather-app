import WeatherContext from "../../context/WeatherContext";
import { useContext } from "react";

const CardContainer = () => {
  const { data, setShow } = useContext(WeatherContext);

  return (
    <div className="card-container">
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => setShow(false)}
      ></button>
      <h1 className="city-name">{data?.data?.name}</h1>

      <div className="info-container">
        <h2 className="main">{data?.data?.weather[0].main}</h2>
        <h2 className="description">{data?.data?.weather[0].description}</h2>
        <h3 className="text-temp number">{data?.data?.main.temp} °C</h3>
        <img
          src={`https://openweathermap.org/img/w/${data?.data?.weather[0].icon}.png`}
          alt="weather-icon"
          className="weather-img"
        />

        <p className="text">
          <span> {data?.data?.main.temp_min}°C (min)</span>|
          <span>
            {data?.data?.main.temp_max}
            °C (max)
          </span>
        </p>
      </div>
    </div>
  );
};

export default CardContainer;
