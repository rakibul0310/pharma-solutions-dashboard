import React, { useState } from "react";
import { useBreakpoints } from "react-device-breakpoints";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import AppContent from "./AppContent";
import NavBar from "../../components/Dashboard/NavBar";
import Sidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [triggred, setTriggred] = useState(false);

  const device = useBreakpoints();

  useEffect(() => {
    if (device.isTablet) {
      setSidebarToggle(true);
    }
  }, [device.isTablet]);

  return (
    <>
      {/* main container */}
      <div className="main__container">
        {/* sidebar section */}
        <div
          className={`${
            device.isTablet && !triggred
              ? "sidebar__section_hide"
              : "sidebar__section"
          } ${sidebarToggle ? "toggled" : ""}`}
        >
          {/* sidebar component here  */}

          <Sidebar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
        </div>
        {/* header and main content container  */}
        <div
          className={`${
            device.isTablet && !triggred
              ? "main__content__section_wide"
              : "main__content__section"
          } ${sidebarToggle ? "toggled" : ""}`}
        >
          {/* header here  */}
          <NavBar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
            setTriggred={setTriggred}
          />
          {/* main content here  */}
          <div className="main__content__container">
            {/* main content here */}
            <AppContent />
          </div>
          {/* footer here  */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
