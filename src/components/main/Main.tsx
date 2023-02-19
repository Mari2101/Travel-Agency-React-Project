import css from "./Main.module.scss";
import background from "../../images/main.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Main = () => {
  return (
    <div className={css.main} style={{ backgroundImage: `url(${background})` }}>
      <h1 className={css.hItem}>Explore Georgia</h1>
      <Button component={Link} to="/tours" id={css.btnItem}>
        Our Tours
      </Button>
    </div>
  );
};

export default Main;
