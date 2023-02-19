import React from "react";
import Box from "./Box";
import css from "./Box.module.scss";
import img from "../../images/pexels-sylwia-bartyzel-9374220.jpg";

const Contact = () => {
  return (
    <div className={css.contact}>
      <img src={img} alt="view of Caucasian Mountains" />
      <h2>
        <span>Contact Us</span>
      </h2>
      <div className={css.boxes}>
        <Box />
      </div>
    </div>
  );
};

export default Contact;
