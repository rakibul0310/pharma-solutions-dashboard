import React from "react";
import CustomIcon from "../CustomIcon";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <footer style={{ padding: "0px 10px", textAlign: "center" }}>
      <div className="left__text">
        <span>Help info</span>
        <CustomIcon>
          <IoIosArrowDown />
        </CustomIcon>
      </div>
      <div className="right__text">
        <p className="footer-text">
          Copyright@2022 banglatech, Design with{" "}
          <span style={{ color: "red" }}>&#10084;</span> by Powell Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
