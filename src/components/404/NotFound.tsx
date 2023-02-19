import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <img
        style={{ maxWidth: "1200px" }}
        src="https://designshack.net/wp-content/uploads/404.png"
        alt="not found"
      />
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <Link style={{ textDecoration: "none", margin: "20px" }} to="/">
        Home
      </Link>
      <Link style={{ textDecoration: "none" }} to="/tours">
        Tours
      </Link>
      <Link style={{ textDecoration: "none", margin: "20px" }} to="/contact">
        Contact
      </Link>
    </div>
  );
}
