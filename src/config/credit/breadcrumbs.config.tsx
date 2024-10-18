import { MdVpnKey } from "react-icons/md";

const creditConfig = [
  {
    id: 1,
    label: "Crédito",
    description: "",
    icon: <MdVpnKey />,
    crumbs: [
      {
        path: "/home",
        label: "Inicio",
        id: "/home",
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

const logoutConfig = {
  logoutPath: "/",
  logoutTitle: "Cerrar sesión",
};

export { creditConfig, logoutConfig };
