import React from "react";
import Page404 from "../pages/page404/Page404";
const Medicines = React.lazy(() =>
  import("../pages/dashboard/medicines/Medicines")
);
const DashboardHome = React.lazy(() =>
  import("../pages/dashboard/dashboardHome/DashboardHome")
);

// { path: '/user/logout', name: 'Logout', permission: ['user','admin'], component: Logout },
/****************************user routes *****************************************/
export const routers = [
  // Not Found Page
  {
    path: "*",
    exact: true,
    name: "Error",
    component: Page404,
  },

  //pages
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    component: DashboardHome,
  },
  {
    path: "/medicine",
    exact: true,
    name: "Medicine",
    component: Medicines,
  },
];
