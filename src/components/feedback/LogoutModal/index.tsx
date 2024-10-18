import { Button } from "@inubekit/button";
import { useMediaQuery } from "@inubekit/hooks";
import { Blanket } from "@inubekit/blanket";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { MdClose } from "react-icons/md";

import { StyledBackdropBlanket, StyledModal } from "./styles";
import { textsConfig } from "./config";

interface ILogoutModalProps {
  logoutPath: string;
  handleShowBlanket: () => void;
}

function LogoutModal(props: ILogoutModalProps) {
  const { logoutPath, handleShowBlanket } = props;
  const isSmallScreen = useMediaQuery("(max-width: 743px)");

  return (
    <StyledBackdropBlanket>
      <Blanket>
        <StyledModal $isSmallScreen={isSmallScreen}>
          <Stack direction="column" gap="24px" padding="24px">
            <Stack direction="column" gap="24px">
              <Stack justifyContent="space-between">
                <Text type="title" size={isSmallScreen ? "small" : "medium"}>
                  {textsConfig.title}
                </Text>
                <Icon
                  appearance="dark"
                  icon={<MdClose />}
                  size={isSmallScreen ? "20px" : "24px"}
                  onClick={handleShowBlanket}
                  cursorHover
                />
              </Stack>

              <Text size={isSmallScreen ? "small" : "large"} appearance="gray">
                {textsConfig.confirmMessage}
              </Text>
            </Stack>
            <Stack justifyContent="flex-end" gap="16px">
              <Button
                appearance="gray"
                spacing={isSmallScreen ? "compact" : "wide"}
                onClick={handleShowBlanket}
              >
                {textsConfig.cancelButton}
              </Button>
              <Button
                appearance="primary"
                spacing={isSmallScreen ? "compact" : "wide"}
                onClick={handleShowBlanket}
                type="link"
                path={logoutPath}
              >
                {textsConfig.logoutButton}
              </Button>
            </Stack>
          </Stack>
        </StyledModal>
      </Blanket>
    </StyledBackdropBlanket>
  );
}

export { LogoutModal };
export type { ILogoutModalProps };
