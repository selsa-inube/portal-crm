import { Grid } from "@inubekit/grid";

import { MoneyDestinationCardProps } from "@src/components/cards/MoneyDestinationCard";
import { MoneyDestinationCard } from "@components/cards/MoneyDestinationCard";

function getTemplateColumns(matches: Record<string, boolean>) {
  if (matches["(max-width: 600px)"]) {
    return "1fr";
  } else if (matches["(max-width: 1024px)"]) {
    return "repeat(2, 1fr)";
  } else {
    return "repeat(3, 1fr)";
  }
}

interface MoneyDestinationUIProps {
  destinations: Omit<MoneyDestinationCardProps, "handleChange">[];
  matches: Record<string, boolean>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MoneyDestinationUI(props: MoneyDestinationUIProps) {
  const { destinations, matches, handleChange } = props;

  return (
    <Grid
      templateColumns={getTemplateColumns(matches)}
      gap="12px"
      height="100vh"
    >
      {destinations.map((destination) => (
        <MoneyDestinationCard
          key={destination.id}
          id={destination.id}
          name={destination.name}
          value={destination.value}
          label={destination.label}
          icon={destination.icon}
          handleChange={handleChange}
        />
      ))}
    </Grid>
  );
}

export { MoneyDestinationUI };
