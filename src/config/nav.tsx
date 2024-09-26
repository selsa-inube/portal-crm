import { INav } from "@components/layout/AppPage/types";
import { MdOutlineStart, MdVpnKey, MdOutlineDescription } from "react-icons/md";

const appsConfig = [
  {
    id: 1,
    label: "Crédito",

    icon: <MdVpnKey />,
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/credit",
        label: "Crédito",
        id: "/credit",
        isActive: true,
      },
    ],
    url: "/credit",
  },
];

const nav: INav = {
  title: "MENU",
  sections: {
    administrate: {
      name: "",
      links: {
        startProcess: {
          id: "privileges",
          label: "Privilegios",
          icon: <MdOutlineStart />,
          path: "/",
        },
        Credit: {
          id: "credit",
          label: "Crédito",
          icon: <MdOutlineDescription />,
          path: "/credit",
        },
      },
    },
  },
};

export { appsConfig, nav };
