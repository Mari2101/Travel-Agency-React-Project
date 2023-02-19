import ArticlesView from "./Articles/ArticlesView";
import WeatherApi from "./weather/WeatherApi";

const TravelTips = () => {
  return (
    <>
      <WeatherApi />
      <div style={{ backgroundColor: "rgba(161, 226, 217, 0.888)" }}>
        <h2
          style={{ textDecoration: "underline" }}
          className="text-center display-4"
        >
          Travel Tips
        </h2>
        <p style={{ textAlign: "justify" }} className="h4 p-5">
          Are you planning to travel to Georgia soon? Then those are the Georgia
          Travel Tips you`re looking for! Here is everything you need to know
          about traveling and backpacking in Georgia! <br />
          <br /> With this Georgia travel tips, I want to help you prepare for
          your trip to Georgia. I cover everything from visas, entry
          requirements and safety to transport, accommodation, food, useful apps
          and cultural etiquette so you`ll have a great time traveling in
          Georgia!
        </p>

        <ArticlesView />
      </div>
    </>
  );
};

export default TravelTips;
