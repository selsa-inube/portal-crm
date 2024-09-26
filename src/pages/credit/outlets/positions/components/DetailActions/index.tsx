import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import {
  MdClose,
  MdDeleteOutline,
  MdOutlineEdit,
  MdOutlineRemoveRedEye,
  MdOutlineAssignmentTurnedIn,
} from "react-icons/md";

import { StyledContainer, StyledLi, StyledUl, StyledActions } from "./styles";

interface Action {
  icon: React.ReactNode;
  appearance:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "help"
    | "dark"
    | "gray"
    | "light";
  label: string;
}

interface DetailActionsProps {
  onClose?: () => void;
  onClick?: () => void;
}

const actions: Action[] = [
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
  { icon: <MdOutlineEdit />, appearance: "primary", label: "Editar" },
  { icon: <MdDeleteOutline />, appearance: "danger", label: "Eliminar" },
];

export function DetailActions({ onClose, onClick }: DetailActionsProps) {
  return (
    <StyledContainer>
      <StyledActions>
        <Stack padding="10px 15px" width="132px">
          <Icon
            icon={<MdClose />}
            appearance="dark"
            size="24px"
            onClick={onClose}
          />
          <StyledUl>
            {actions.map((item, index) => (
              <StyledLi key={index} onClick={onClick}>
                <Icon icon={item.icon} appearance={item.appearance} size="18px"/>
                <Text size="medium">{item.label}</Text>
              </StyledLi>
            ))}
          </StyledUl>
        </Stack>
      </StyledActions>
    </StyledContainer>
  );
}
