import React from "react";
import Container from "./styles";
import Logo from "../../components/Logo/index";
import { Link } from "react-router-dom";
import content from "../../content/content.json";

const Landing = () => {
  return (
    <Container>
      <div className="navbar">
        <Logo />
        <nav>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </nav>
        <div>
          <Link to="login">Login</Link>/<Link to="signup">SignUp</Link>
        </div>
      </div>
      <div className="container">
        <div>
          <h1>
            Welcome <br />
            to our <span className="active">activity</span> control!
          </h1>
          <p>{content.landing.slogan}</p>
        </div>
        <div>
          <img src="./assets/images/1.png" alt="" className="landin-img" />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
