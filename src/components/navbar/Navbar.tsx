import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.scss";

export default function Navbar() {
  const [showAnimated, setShowAnimated] = useState(false);

  return (
    <>
      <section className=" mb-0 absolute-top">
        <MDBNavbar dark bgColor="dark">
          <MDBContainer fluid id={css.container}>
            <MDBNavbarToggler
              type="button"
              className="second-button"
              id={css.navToggler}
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <MDBIcon icon="chevron-circle-down" fas className={css.navIcon} />
              <div className={`animated-icon2 ${showAnimated && "open"}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated}>
          <div id={css.flexContainer} className="bg-light shadow-3 d-flex">
            <MDBBtn block className=" m-0" color="link" id={css.link}>
              <Link to="/">Home</Link>
            </MDBBtn>
            <MDBBtn block className=" m-0" color="link" id={css.link}>
              <Link to="/about">About</Link>
            </MDBBtn>
            <MDBBtn block className=" m-0" color="link" id={css.link}>
              <Link to="/tours">Tours</Link>
            </MDBBtn>
            <MDBBtn block className=" m-0" color="link" id={css.link}>
              <Link to="./travel-tips">Travel Tips</Link>
            </MDBBtn>
            <MDBBtn block className=" m-0" color="link" id={css.link}>
              <Link to="/contact">Contact Us</Link>
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}
