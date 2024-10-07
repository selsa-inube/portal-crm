import { createPortal } from "react-dom";

import { Blanket } from "@inubekit/blanket";
import { Spinner } from "@inubekit/spinner";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { dataConsulting } from "./config";
import { StyledContainer } from "./styles";

export interface iConsultingProps {
  portalId?: string;
}

export function Consulting(props: iConsultingProps) {
  const { portalId } = props;

  const node = document.getElementById(portalId ?? "portal");
  if (!node) {
    throw new Error(
      "The portal node is not defined. This can occur when the specific node used to render the portal has not been defined correctly."
    );
  }

  return createPortal(
    <Blanket>
      <StyledContainer>
        <Stack
          width="450px"
          direction="column"
          alignItems="center"
          gap="24px"
          padding="24px"
        >
          <Spinner />
          <Text type="title" size="large">
            {dataConsulting.Consulting}
          </Text>
          <Text type="body" size="large" textAlign="center" appearance="gray">
            {dataConsulting.wait}
          </Text>
        </Stack>
      </StyledContainer>
    </Blanket>,
    node
  );
}
