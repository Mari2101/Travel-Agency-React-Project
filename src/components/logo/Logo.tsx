import { Link } from "react-router-dom";
import css from "./Logo.module.scss";
const Logo = () => {
  return (
    <Link to="/">
      <div className={css.logo}>DTours</div>
    </Link>
  );
};

export default Logo;
