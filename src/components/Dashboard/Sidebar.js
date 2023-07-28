import React, { useRef } from "react";
import { useEffect } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import CustomLink from "../CustomLink";
import MenuAccrodion from "./MenuAccrodion";
import logo from "../../Assets/logo.svg";
import userIcon from "../../Assets/userIcon.svg";

const Sidebar = ({ sidebarToggle, setSidebarToggle }) => {
  let toggleRef = useRef();

  const device = useBreakpoints();

  useEffect(() => {
    const handleMenuDropDown = (e) => {
      if (device.isTablet && !toggleRef?.current?.contains(e?.target)) {
        // setSidebarToggle(true);
        console.log(sidebarToggle);
      }
      // console.log(openMenu);
    };

    document.addEventListener("mousedown", handleMenuDropDown);
  });

  return (
    <section className="sidebar__section__container" ref={toggleRef}>
      <div className="logo__container">
        <CustomLink className="header__logo" href="/">
          <div className="header__logo__container">
            <img src={logo} alt="" srcset="" />
            <div className="logo__text__container">
              <h5 className="text1">Pharma</h5>
              <span></span>
              <h5 className="text2">Solutions</h5>
            </div>
          </div>
        </CustomLink>
      </div>
      <div className="user__info__container">
        <div className="user__icon__container">
          <img src={userIcon} alt="" srcset="" />
        </div>
        <div className="user__info__text__container">
          <h5 className="name">admin user</h5>
          <span className="email">admin@gmail.com</span>
        </div>
      </div>
      <div className="sidebar__menu__container">
        <ul className="sidebar__menu__lists">
          <MenuAccrodion setSidebarToggle={setSidebarToggle} />
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
