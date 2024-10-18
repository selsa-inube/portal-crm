import { Grid } from "@inubekit/grid";
import { useMediaQuery } from "@inubekit/hooks";

import {
  AppMenuCard,
  AppMenuCardProps,
} from "@components/cards/AppMenuCard/index";

interface AppMenuGridProps {
  appOptions: AppMenuCardProps[];
}

function AppMenuGrid(props: AppMenuGridProps) {
  const { appOptions } = props;

  const screenMobile = useMediaQuery("(max-width: 580px)");

  return (
    <Grid
      templateColumns={
        screenMobile ? "1fr" : "repeat(auto-fill,minmax(auto, 205px))"
      }
      autoRows="auto"
      gap="24px"
    >
      {appOptions.map((item) => (
        <AppMenuCard
          id={item.id}
          key={item.id}
          icon={item.icon}
          label={item.label}
          description={item.description}
          url={item.url}
          domain={item.domain}
        />
      ))}
    </Grid>
  );
}

export { AppMenuGrid };
export type { AppMenuGridProps };
