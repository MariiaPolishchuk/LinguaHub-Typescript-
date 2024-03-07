import React, { useState, useEffect } from "react";
import ExperienceColumn from "./ExperienceColumn";
import MyCarousel from "./MyCarousel";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../styles/Home.css";

const Home: React.FC = () => {
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className={`start-page ${showText ? "fade-in show" : "fade-in"}`}>
      <div className="img-container">
        <img
          className="home-img"
          src="/src/assets/images/start.png"
          alt="Start"
        />
        <div className="home-intro animated-text">
          <div className="text-column">
            <h1 className="text-intro text">
              Welcome to the fascinating learning Interactive Resource!
            </h1>
            <p className="text-intro-p">
              Start boosting your vocabulary using our powerful tool!
            </p>
            <p className="text-intro-p">
              Our lessons are meticulously crafted utilizing the spaced
              repetition technique!
            </p>
          </div>

          <div className="start-test">
            <Link to="/test">
              <Button className="start-button" variant="contained">
                Start Test!
              </Button>
            </Link>
          </div>
          <ExperienceColumn />
        </div>
      </div>
      <MyCarousel />
    </div>
  );
};

export default Home;
