import image from "../../images/food.jpg";
import css from "./About.module.scss";
const About = () => {
  return (
    <div className={css.about} style={{ backgroundImage: `url(${image})` }}>
      <h2 className={css.heading}>About</h2>
      <p className={css.paragraph}>
        Travel to Georgia will give you the opportunity to get to know this
        amazing country, with its astonishing diversity and breathtaking beauty,
        ancient history and trend-setting style. Get ready for unforgettable
        journey in mountain ski resorts and sunny cost of country.
        <br />
        Georgia, this beautiful country lies in the middle of Caucasus region
        and has unspoiled natural beauty to compliment unique culture. From its
        green valleys spread with vineyards, to its old Churches and watchtowers
        perched in fantastic mountain scenery, from the beautiful seaside to dry
        valleys in desert, Georgia is one of the most beautiful countries on
        earth for travelers of every kind, this is a place where guests are
        consider blessings, Georgia loves every visitor, every tourist, every
        single guest and believe, you will fall in love with this country for
        good.
      </p>
    </div>
  );
};

export default About;
