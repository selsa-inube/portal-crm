import { MdDeleteOutline, MdOutlineEdit, MdOutlineSend } from "react-icons/md";

import { IAppearance } from "@src/types/appearance.types";

interface IIconConfig extends IAppearance {
  icon: JSX.Element;
}

export const icons:IIconConfig[] = [
  {
    icon: <MdOutlineSend />,
    appearance: "primary",
  },
  {
    icon: <MdOutlineEdit />,
    appearance: "dark",
  },
  {
    icon: <MdDeleteOutline />,
    appearance: "danger",
  },
];
