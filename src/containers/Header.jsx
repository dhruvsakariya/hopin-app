import React from "react";
import Navbar from "../components/Navbar";
import { FiMessageSquare } from "react-icons/fi";
// FiMessageSquare
import "../styles/header.css";

const brandIcons = [
  `slack.svg`,
  `veeam.svg`,
  `twitch.svg`,
  `the_atlantic.svg`,
  `tech_crunch.svg`,
  `workato.svg`,
  `glassdoor.svg`,
  `united_nation.svg`,
];

const Header = () => {
  return (
    <div className="header section__padding">
      <section className="nav_section">
        <Navbar />
      </section>
      <div className="header__content">
        <h1>All your events, all on Hopin</h1>
        <p>
          Create immersive virtual, hybrid, and in-person event experiences for
          your audience, no matter where they are.
        </p>
        <button className="btn_meet">Meet with our team</button>
        <ul className="brand_icons">
          {brandIcons.map((icon) => {
            return (
              <li>
                <img
                  key={icon}
                  src={`/assets/${icon}`}
                  alt="brand"
                  className={icon.split(".")[0]}
                />
              </li>
            );
          })}
        </ul>
        <div className="header__image">
          <img src="/assets/header_img.jpg" alt="header image" />
        </div>
      </div>

      <div className="chat">
        <FiMessageSquare className="chat_box" />
      </div>
    </div>
  );
};

export default Header;
