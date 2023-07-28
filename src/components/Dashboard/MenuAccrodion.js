import React, { useState } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useBreakpoints } from "react-device-breakpoints";
import { dashboardMenus } from "../../utils/tools/dashboardMenus";
import CustomIcon from "../CustomIcon";
import CustomLink from "../CustomLink";

const MenuAccrodion = ({ setSidebarToggle }) => {
  const [collapse, setCollapse] = useState(false);
  const activePath = useLocation();

  const toggle = (index) => {
    if (collapse === index) {
      return setCollapse(null);
    }
    setCollapse(index);
  };

  const device = useBreakpoints();
  const protectedMenus = dashboardMenus;

  return (
    <>
      {protectedMenus.map((d, i) => (
        <li
          key={d.id}
          className={`sidebar__menu__list ${d.dropdown ? "submenu" : ""} ${
            activePath.pathname === d?.route ? "active" : ""
          } ${d.disabled ? "disable" : ""}`}
          id={d.id}
        >
          <CustomLink
            href={d?.route}
            onClick={() => {
              toggle(d.id);
              if (!d.dropdown) {
              }
            }}
            className={`sidebar__menu__link ${
              activePath.pathname === d?.route ? "active" : ""
            } ${d.disabled ? "disable" : ""}`}
          >
            <div className="icon_text">
              <CustomIcon
                className={`sidebar__menu__icon ${
                  activePath.pathname === d?.route ? "active" : ""
                } ${d.disabled ? "disable" : ""}`}
              >
                {d.icon}
              </CustomIcon>
              <p>{d.menu}</p>
            </div>
            <CustomIcon
              className={`sidebar__menu__icon ${
                activePath.pathname === d?.route ? "active" : ""
              } ${d.disabled ? "disable" : ""}`}
            >
              <RiArrowDropRightLine />
            </CustomIcon>
          </CustomLink>
          {collapse === d.id ? (
            <ul>
              {d.dropdown?.map((drop) => {
                return (
                  <li key={drop.id}>
                    <CustomLink
                      href={drop?.route}
                      className={`nav__link dropdown ${
                        activePath.pathname === drop?.route ? "active" : ""
                      }`}
                      onClick={() => {
                        device.isTablet && setCollapse(false);
                      }}
                    >
                      {drop.menu}
                    </CustomLink>
                  </li>
                );
              })}
            </ul>
          ) : (
            console.log("null")
          )}
        </li>
      ))}
    </>
  );
};

export default MenuAccrodion;
