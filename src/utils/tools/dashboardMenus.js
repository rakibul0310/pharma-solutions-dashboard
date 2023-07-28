import {
  AiFillBank,
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineSetting,
  AiOutlineStock,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { GrPowerCycle } from "react-icons/gr";
import { SlBookOpen } from "react-icons/sl";
import { SiTaxbuzz } from "react-icons/si";
import { RiServiceLine } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";
import { GiMedicines, GiReceiveMoney, GiReturnArrow } from "react-icons/gi";
import { BsCart4, BsPersonVcard, BsSearch } from "react-icons/bs";

export let dashboardMenus = [
  {
    id: "337fwedkf",
    menu: "Dashboard",
    icon: <AiOutlineHome />,
    route: "/",
  },
  {
    id: "337fwedkf3",
    menu: "Stock Medicine",
    icon: <GiMedicines />,
    route: "/medicine",
  },
  {
    id: "337fwedkf1",
    menu: "Customer",
    icon: <FaUsers />,
    route: "/customer",
  },
  {
    id: "337fwedkf2",
    menu: "Supplier",
    icon: <PiUsersThree />,
    route: "/supplier",
  },
  {
    id: "337fwedkf4",
    menu: "Purchase",
    icon: <BsCart4 />,
    route: "/purchase",
  },
  {
    id: "337fwedkf5",
    menu: "Invoice",
    icon: <GiReceiveMoney />,
    route: "/invoice",
  },
  {
    id: "337fwedkf6",
    menu: "Return",
    icon: <GiReturnArrow />,
    route: "/return",
  },
  {
    id: "337fwedkf7",
    menu: "Stock",
    icon: <AiOutlineStock />,
    route: "/stock",
  },
  {
    id: "337fwedkf8",
    menu: "Bank",
    icon: <AiFillBank />,
    route: "/bank",
  },
  {
    id: "337fwedkf9",
    menu: "Accounts",
    icon: <AiOutlineIdcard />,
    route: "/accounts",
  },
  {
    id: "337fwedkf10",
    menu: "Reports",
    icon: <SlBookOpen />,
    route: "/reports",
  },
  {
    id: "337fwedkf11",
    menu: "Human Resource",
    icon: <BsPersonVcard />,
    route: "/human-resource",
  },
  {
    id: "337fwedkf12",
    menu: "Tax",
    icon: <SiTaxbuzz />,
    route: "/tax",
  },
  {
    id: "337fwedkf13",
    menu: "Service",
    icon: <RiServiceLine />,
    route: "/service",
  },
  {
    id: "337fwedkf14",
    menu: "Search",
    icon: <BsSearch />,
    route: "/search",
  },
  {
    id: "337fwedkf15",
    menu: "Application Setting",
    icon: <AiOutlineSetting />,
    route: "/application-setting",
  },
  {
    id: "337fwedkf16",
    menu: "Autoupdate",
    icon: <GrPowerCycle />,
    route: "/autoupdate",
  },
];
