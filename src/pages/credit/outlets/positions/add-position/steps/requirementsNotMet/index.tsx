import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { UnfulfilledRequirements } from "@src/components/cards/UnfulfilledRequirements";

import { dataNotMet } from "./config";
import { Fieldset } from "@src/components/data/Fieldset";

export function RequirementsNotMet() {
  const smallScreen = useMediaQuery("(max-width:880px)");

  return (
    <Fieldset isMobile={smallScreen} slim>
      <Stack
        gap="16px"
        margin={smallScreen ? "8px" : "16px"}
        direction={smallScreen ? "column" : "row"}
      >
        {dataNotMet.map((requirementData, index) => (
          <UnfulfilledRequirements
            key={index}
            title={requirementData.title}
            isMobile={smallScreen}
            requirement={requirementData.requirement}
            causeNoncompliance={requirementData.causeNoncompliance}
          />
        ))}
      </Stack>
    </Fieldset>
  );
}
