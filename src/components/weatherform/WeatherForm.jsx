import WeatherContext from "../../context/WeatherContext";
import { useContext } from "react";

const WeaterForm = () => {
  const { inpuRef, searchLocation, setCity } = useContext(WeatherContext);

  return (
    <form className="d-flex weather-form" onSubmit={searchLocation}>
      <input
        ref={inpuRef}
        className="form-control me-sm-2 input"
        onChange={() => setCity(inpuRef.current.value.trim())}
        type="search"
        placeholder="Enter City Name"
      />
      <button className="btn btn-primary my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};

export default WeaterForm;
