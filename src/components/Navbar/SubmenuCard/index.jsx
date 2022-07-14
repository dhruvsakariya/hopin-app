import React from "react";
import "./styles.css";

const SubmenuCard = ({ submenu = {} }) => {
  const { icon, title, subtitle } = submenu;
  console.log(submenu);
  return (
    <div className="submenucard">
      {icon && (
        <div className="icon">
          <img src={`/assets/${icon}`} alt="icon" />
        </div>
      )}
      <div className="content">
        <h4 className="submenucard__title">{title}</h4>
        <p className="submenucard__subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default SubmenuCard;
