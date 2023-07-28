import React, { useEffect, useRef, useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import CustomIcon from "../CustomIcon";
import avatar from "../../Assets/profile.png";
import { GrNotification } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";

const NavBar = ({ sidebarToggle, setSidebarToggle, setTriggred }) => {
  const [openMenu, setOpenMenu] = useState(false);
  let toggleRef = useRef();

  useEffect(() => {
    const handleMenuDropDown = (e) => {
      if (!toggleRef?.current?.contains(e?.target)) {
        setOpenMenu(false);
      }
      console.log(openMenu);
    };

    document.addEventListener("mousedown", handleMenuDropDown);
  });
  return (
    <section className="navbar__section__container">
      <div className="navbar__branding__container">
        <CustomIcon className="hamburger_icon">
          <RiBarChartHorizontalLine
            onClick={() => {
              setSidebarToggle(!sidebarToggle);
              setTriggred(true);
            }}
          />
        </CustomIcon>
      </div>
      <div className="navbar__search">
        <input type="search" placeholder="Search Now" name="" id="" />
        <CustomIcon className="navbar__search__icon">
          <AiOutlineSearch />
        </CustomIcon>
      </div>
      <div>
        <ul className="navbar__menu__lists">
          <li className="navbar__menu__list">
            <div className="theme_icon"></div>
          </li>
          <li className="navbar__menu__list profile" ref={toggleRef}>
            <div className="notfication__icon__container">
              <CustomIcon className="notication__icon">
                <GrNotification />
              </CustomIcon>
              <CustomIcon className="notification__dot">
                <GoDotFill />
              </CustomIcon>
            </div>
            <img src={avatar} alt="user_pic" />
            <div className="profile__text__container">
              <span>Bradly Robin</span>
              <CustomIcon>
                <IoIosArrowDown />
              </CustomIcon>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavBar;
