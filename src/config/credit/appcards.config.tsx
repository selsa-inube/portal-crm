import { MdOutlineBusinessCenter } from "react-icons/md";

const creditOptionsConfig = [
  {
    id: 1,
    icon: <MdOutlineBusinessCenter />,
    label: "Prospectos",
    description: "Potenciales clientes para adquirir productos de crédito.",
    url: "/credit/options/prospects",
    domain: "prospects",
    crumbs: [
      {
        path: "/",
        label: "Inicio",
        id: "/",
        isActive: false,
      },
      {
        path: "/credit",
        label: "Privilegios",
        id: "/credit",
        isActive: false,
      },
      {
        path: "/credit/users",
        label: "Usuarios Linix",
        id: "/credit/users",
        isActive: true,
      },
    ],
  },
];

export { creditOptionsConfig };
