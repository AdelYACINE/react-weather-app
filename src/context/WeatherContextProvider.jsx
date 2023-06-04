import WeatherContext from "./WeatherContext";
import { useState, useRef, useReducer } from "react";
import axios from "axios";
import WeatherReducer from "./WeatherReducer";

const WeatherContextProvider = ({ children }) => {
  const initialState = { data: {} };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inpuRef = useRef();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca2e57e38106f9a385b96151ca26cedd&units=metric`;

  const searchLocation = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const res = await axios.get(url);

      dispatch({ type: "get-data", payload: res });
      console.log(res);
      setShow(true);
      setError(false);
      setIsLoading(false);
      setCity("");
    } catch (error) {
      console.error(error.message);
      setError(true);
      setShow(true);
      setIsLoading(false);
    }
    inpuRef.current.value = "";
  };
  return (
    <WeatherContext.Provider
      value={{
        data: state.data,
        setCity,
        show,
        setShow,
        searchLocation,
        inpuRef,
        error,
        isLoading,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
