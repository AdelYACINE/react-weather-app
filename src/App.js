import WeatherCard from "./components/cardweather/WeatherCard";
import WeatherForm from "./components/weatherform/WeatherForm";
import WeatherContextProvider from "./context/WeatherContextProvider";

function App() {
  return (
    <WeatherContextProvider>
      <div className="App">
        <WeatherForm />
        <WeatherCard />
      </div>
    </WeatherContextProvider>
  );
}

export default App;
