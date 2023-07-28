import {
  AiFillBank,
  AiOutlineHome,
  AiOutlineIdcard,
  AiOutlineSetting,
  AiOutlineStock,
} from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
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
    disabled: false,
    route: "/",
  },
  {
    id: "337fwedkf3",
    menu: "Stock Medicine",
    icon: <GiMedicines />,
    disabled: false,
    route: "/medicine",
  },
  {
    id: "337fwedkf1",
    menu: "Customer",
    icon: <FaUsers />,
    disabled: true,
    route: "/customer",
  },
  {
    id: "337fwedkf2",
    menu: "Supplier",
    icon: <PiUsersThree />,
    disabled: true,
    route: "/supplier",
  },
  {
    id: "337fwedkf4",
    menu: "Purchase",
    icon: <BsCart4 />,
    disabled: true,
    route: "/purchase",
  },
  {
    id: "337fwedkf5",
    menu: "Invoice",
    icon: <GiReceiveMoney />,
    disabled: true,
    route: "/invoice",
  },
  {
    id: "337fwedkf6",
    menu: "Return",
    icon: <GiReturnArrow />,
    disabled: true,
    route: "/return",
  },
  {
    id: "337fwedkf7",
    menu: "Stock",
    icon: <AiOutlineStock />,
    disabled: true,
    route: "/stock",
  },
  {
    id: "337fwedkf8",
    menu: "Bank",
    icon: <AiFillBank />,
    disabled: true,
    route: "/bank",
  },
  {
    id: "337fwedkf9",
    menu: "Accounts",
    icon: <AiOutlineIdcard />,
    disabled: true,
    route: "/accounts",
  },
  {
    id: "337fwedkf10",
    menu: "Reports",
    icon: <SlBookOpen />,
    disabled: true,
    route: "/reports",
  },
  {
    id: "337fwedkf11",
    menu: "Human Resource",
    icon: <BsPersonVcard />,
    disabled: true,
    route: "/human-resource",
  },
  {
    id: "337fwedkf12",
    menu: "Tax",
    icon: <SiTaxbuzz />,
    disabled: true,
    route: "/tax",
  },
  {
    id: "337fwedkf13",
    menu: "Service",
    icon: <RiServiceLine />,
    disabled: true,
    route: "/service",
  },
  {
    id: "337fwedkf14",
    menu: "Search",
    icon: <BsSearch />,
    disabled: true,
    route: "/search",
  },
  {
    id: "337fwedkf15",
    menu: "Application Setting",
    icon: <AiOutlineSetting />,
    disabled: true,
    route: "/application-setting",
  },
  {
    id: "337fwedkf16",
    menu: "Autoupdate",
    icon: <RxUpdate />,
    disabled: true,
    route: "/autoupdate",
  },
];
