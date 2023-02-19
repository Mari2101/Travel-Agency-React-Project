import css from "./Box.module.scss";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";
const contactObj = [
  {
    logo: <FaPhone style={{ width: "35px", height: "35px" }} />,
    name: "Phone number",
    link: "+97252525252",
  },
  {
    logo: <FaTiktok style={{ width: "35px", height: "35px" }} />,
    name: "TikTok",
    link: "https://www.tiktok.com/",
  },
  {
    logo: <FaFacebook style={{ width: "35px", height: "35px" }} />,
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    logo: <FaInstagram style={{ width: "35px", height: "35px" }} />,
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    logo: <FaTelegram style={{ width: "35px", height: "35px" }} />,
    name: "Telegram",
    link: "https://www.telegram.com/",
  },
];
const Box = () => {
  return (
    <div className={css.boxItem}>
      {contactObj.map((el) => {
        return (
          <div key={el.name.toString()}>
            <a style={{ textDecoration: "none" }} href={el.link}>
              <span>{el.logo}</span>
              <h3>{el.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
