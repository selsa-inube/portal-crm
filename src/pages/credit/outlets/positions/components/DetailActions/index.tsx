import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { MdClose } from "react-icons/md";

import { actions } from "./config";
import { StyledContainer, StyledLi, StyledUl, StyledActions } from "./styles";

interface DetailActionsProps {
  onClose?: () => void;
  onClick?: () => void;
}

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
                <Icon
                  icon={item.icon}
                  appearance={item.appearance}
                  size="18px"
                />
                <Text size="medium">{item.label}</Text>
              </StyledLi>
            ))}
          </StyledUl>
        </Stack>
      </StyledActions>
    </StyledContainer>
  );
}
