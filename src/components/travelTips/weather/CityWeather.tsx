import Marquee from "react-fast-marquee";
interface WeatherProps {
  weather: Cities;
}

const CityWeather = ({ weather }: WeatherProps) => {
  return (
    <div>
      <Marquee
        gradient={false}
        style={{
          borderTop: "3px solid green",
          borderBottom: "3px solid green",
        }}
      >
        {" "}
        {weather &&
          weather.list &&
          weather.list.map((city) => {
            return (
              <span
                key={city.id}
                style={{ marginRight: "100px", fontSize: "20px" }}
              >
                {`${city.name} `}
                {Math.round(city.main.temp)}
                <sup>o </sup>
              </span>
            );
          })}
      </Marquee>
    </div>
  );
};

export default CityWeather;
