import React from "react";
import { BsArrowUp } from "react-icons/bs";
import CustomIcon from "../CustomIcon";

const Card = (props) => {
  return (
    <div className="card__main__container">
      <div className="card__left">
        <h5>{props.title}</h5>
        <span>{props.count}</span>
        <div className="card__action__container">
          <CustomIcon>
            <BsArrowUp />
          </CustomIcon>
          <span>Show Details</span>
        </div>
      </div>
      <div className="card__right">
        <div
          className="icon__container"
          style={{ backgroundColor: props.iconBG }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
