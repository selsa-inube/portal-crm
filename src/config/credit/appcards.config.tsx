import { MdOutlineBusinessCenter } from "react-icons/md";

const creditOptionsConfig = [
  {
    id: 1,
    icon: <MdOutlineBusinessCenter />,
    label: "Prospectos",
    description: "Potenciales clientes para adquirir productos de crédito.",
    url: "/credit/options/positions",
    domain: "prospects",
    crumbs: [
      {
        path: "/home",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/credit",
        label: "Crédito",
        id: "/credit",
        isActive: false,
      },
      {
        path: "/credit/options/positions",
        label: "Prospectos",
        id: "/credit/positions",
        isActive: true,
      },
    ],
  },
];

export { creditOptionsConfig };
