import { MdOutlineBusinessCenter } from "react-icons/md";

const creditOptionsConfig = [
  {
    id: 1,
    icon: <MdOutlineBusinessCenter />,
    label: "Prospectos",
    description: "Potenciales clientes para adquirir productos de crédito.",
    url: "/credit/positions",
    domain: "credit",
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
        isActive: false,
      },
      {
        path: "/credit/positions",
        label: "Prospectos",
        id: "/credit/positions",
        isActive: true,
      },
    ],
  },
];

export { creditOptionsConfig };
