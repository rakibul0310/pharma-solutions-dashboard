import React from "react";
import Button from "../../../components/Button";

const Medicines = () => {
  return (
    <div className="medicine__main__container">
      <div className="page__heding__container">
        <div className="heading__and__path">
          <div className="page__heading">
            <h5>Stock Medicines</h5>
          </div>
          <div className="route__path">
            <span className="path">
              Dashboard <span>&gt; Medicines</span>
            </span>
          </div>
        </div>
        <div className="button__container">
          <Button className="btn__base-300">+Add Medicine</Button>
        </div>
      </div>
    </div>
  );
};

export default Medicines;
