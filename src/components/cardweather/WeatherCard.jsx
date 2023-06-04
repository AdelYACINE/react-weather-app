import WeatherContext from "../../context/WeatherContext";
import { useContext } from "react";
import TypeWriter from "../typewriter/TypeWriter";
import Loader from "../loader/Loader";
import CardContainer from "./CardContainer";
import ErrorMsg from "./ErrorMsg";

const WeaterCard = () => {
  const { show, error, isLoading } = useContext(WeatherContext);

  return (
    <>
      {!isLoading ? (
        show ? (
          !error ? (
            <CardContainer />
          ) : (
            <ErrorMsg />
          )
        ) : (
          <TypeWriter />
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default WeaterCard;
