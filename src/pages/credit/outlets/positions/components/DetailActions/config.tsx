import {
  MdDeleteOutline,
  MdOutlineEdit,
  MdOutlineRemoveRedEye,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";
import { IAppearance } from "@src/types/appearance.types";

interface IAppearanceActions {
  icon: React.ReactNode;
  label: string;
}

export const actions: (IAppearance & IAppearanceActions)[] = [
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
