import { Grid } from "@inubekit/grid";
import { Text } from "@inubekit/text";
import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";

import { StyledMoneyDestinationCard, StyledRadio } from "./styles";

interface MoneyDestinationCardProps {
  id: string;
  name: string;
  value: string;
  label: string;
  icon: React.ReactNode;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function MoneyDestinationCard(props: MoneyDestinationCardProps) {
  const { id, name, value, label, icon, handleChange } = props;

  return (
    <StyledMoneyDestinationCard>
      <Grid
        templateColumns="auto 1fr"
        padding="16px 24px"
        height="72px"
        alignItems="center"
        alignContent="center"
        gap="14px"
        width="100%"
      >
        <StyledRadio
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={handleChange}
        />
        <Stack gap="12px">
          <Icon appearance="dark" icon={icon} size="20px" />
          <Text size="medium">{label}</Text>
        </Stack>
      </Grid>
    </StyledMoneyDestinationCard>
  );
}

export { MoneyDestinationCard };
export type { MoneyDestinationCardProps };
