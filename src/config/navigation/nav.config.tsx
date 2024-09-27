import { INav } from "@components/layout/AppPage/types";
import { MdOutlineDescription } from "react-icons/md";

const nav: INav = {
  title: "MENU",
  sections: {
    administrate: {
      name: "",
      links: {
        prospects: {
          id: "credit",
          label: "Crédito",
          icon: <MdOutlineDescription />,
          path: "/credit/options",
        },
      },
    },
  },
};

export { nav };
