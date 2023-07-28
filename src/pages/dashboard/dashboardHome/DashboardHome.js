import React from "react";
import AreaChart from "../../../components/Charts/AreaChart";
import BarChart from "../../../components/Charts/BarChart";
import DonutChart from "../../../components/Charts/DonutChart";
import Card from "../../../components/Dashboard/Card";
import CustomIcon from "../../../components/CustomIcon";
import { PiUsersThreeLight } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import { ImStatsDots } from "react-icons/im";
import { BsCalendar3WeekFill } from "react-icons/bs";
import SummaryTable from "../../../components/Dashboard/SummaryTable";
import Button from "../../../components/Button";

const DashboardHome = () => {
  return (
    <div className="dasbhboard__home__main__container">
      <div className="dashboard__card__container">
        <Card title="Total Customer" count={45} iconBG="#529DE4">
          <CustomIcon className="card__icon">
            <PiUsersThreeLight />
          </CustomIcon>
        </Card>
        <Card title="Total Customer" count={751} iconBG="#FF8A8A">
          <CustomIcon className="card__icon">
            <GiMedicines />
          </CustomIcon>
        </Card>
        <Card title="Total Customer" count={715} iconBG="#FFA958">
          <CustomIcon className="card__icon">
            <ImStatsDots />
          </CustomIcon>
        </Card>
        <Card title="Total Customer" count={33} iconBG="#45B854">
          <CustomIcon className="card__icon">
            <BsCalendar3WeekFill />
          </CustomIcon>
        </Card>
      </div>
      <div className="pie__area__chart__container">
        <div className="pie__chart__container">
          <h5>Income Expense Statement</h5>
          <DonutChart />
        </div>
        <div className="area__chart__container">
          <h5>Best Sales Of The Month</h5>
          <AreaChart />
        </div>
      </div>
      <div className="bar__and__summary__container">
        <div className="bar__chart__container">
          <div className="chart__title__container">
            <h5>Monthly Progress Report</h5>
            <div className="button__container">
              <Button className="btn__primary">Purchase</Button>
              <Button className="btn">Sales</Button>
            </div>
          </div>
          <BarChart />
        </div>
        <div className="summary__container">
          <h5>Summary</h5>
          <SummaryTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
