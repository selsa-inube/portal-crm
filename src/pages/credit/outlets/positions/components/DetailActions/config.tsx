import {
  MdDeleteOutline,
  MdOutlineEdit,
  MdOutlineRemoveRedEye,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";
import { IAppearance } from "@src/types/appearance.types";

export const actions: IAppearance[] = [
  {
    icon: <MdOutlineRemoveRedEye />,
    appearance: "dark",
    label: "Ver detalles",
  },
  {
    icon: <MdOutlineAssignmentTurnedIn />,
    appearance: "dark",
    label: "Radicar",
  },
  {
    icon: <MdOutlineEdit />,
    appearance: "primary",
    label: "Editar",
  },
  {
    icon: <MdDeleteOutline />,
    appearance: "danger",
    label: "Eliminar",
  },
];
