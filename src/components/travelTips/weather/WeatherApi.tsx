import { useEffect } from "react";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import LoaderSpinners from "../../spinner/LoaderSpinner";
import CityWeather from "./CityWeather";

const WeatherApi = () => {
  const [weathers, setWeather]: any = useState();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ApiKey = "b3747e9893eaa2e7bf0712d24875643a";
  async function fetchWeather() {
    try {
      setLoading(true);

      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/group?id=611717,615532,612287,613607,611694,610824,614455&units=metric&appid=${ApiKey}`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div>
      {loading && <LoaderSpinners />}
      {error && <p>{error}</p>}
      <CityWeather weather={weathers} />
    </div>
  );
};

export default WeatherApi;
