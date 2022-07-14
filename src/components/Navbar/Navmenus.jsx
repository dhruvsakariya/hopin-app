import React from "react";
import { MdExpandMore } from "react-icons/md";
import navData from "../../data/navbardata.json";
import SubmenuCard from "./SubmenuCard";

const menus = navData?.menus || [];

const Navmenus = ({ nosubmenus }) => {
  return (
    <ul className={`menu ${!nosubmenus ? "nosubmenus" : ""}`}>
      {menus &&
        menus.map((menu, i) => {
          return (
            <li key={`${menu.title}_${i}`}>
              <a href="#">
                {menu.title}
                {menu.submenus && menu.submenus.length > 0 && <MdExpandMore />}
              </a>
              {!nosubmenus &&
                menu.submenus &&
                menu.submenus.map((submenu, j) => (
                  <div
                    className="submenu"
                    key={`${menu.title}_${submenu.title}_${i}_${j}`}
                  >
                    <div className="dropdown">
                      {/* {!nosubmenus && <Navmenus nosubmenus={true} />} */}
                      <div className="card_content">
                        <p className="submenu-title">What's new?</p>
                        <ul className="dropdown-menu">
                          {submenu.new.map((newUpdate) => (
                            <li
                              key={`${menu.title}_${submenu.title}_${newUpdate.title}`}
                            >
                              <SubmenuCard submenu={newUpdate} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="card_content">
                        <p className="submenu-title">Products</p>
                        <ul className="dropdown-menu products-submenu">
                          {submenu.products.map((product, k) => (
                            <li
                              key={`${menu.title}_${submenu.title}_${product.title}_${i}_${j}_${k}`}
                            >
                              <SubmenuCard submenu={product} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="card_content">
                        <p className="submenu-title">Platform</p>
                        <ul className="dropdown-menu products-submenu">
                          {submenu.platforms.map((platform) => (
                            <li
                              key={`${menu.title}_${submenu.title}_${platform.title}`}
                            >
                              <SubmenuCard submenu={platform} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
            </li>
          );
        })}
    </ul>
  );
};

export default Navmenus;
