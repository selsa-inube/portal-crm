import { Grid } from "@inubekit/grid";
import { useMediaQuery } from "@inubekit/hooks";
import { AppMenuCard } from "@components/cards/AppMenuCard/index";
import { AppMenuCardProps } from "@components/cards/AppMenuCard";

interface AppMenuGridProps {
  appOptions: AppMenuCardProps[];
}

function AppMenuGrid(props: AppMenuGridProps) {
  const { appOptions } = props;

  const screenMovil = useMediaQuery("(max-width:880px)");

  return (
    <Grid
      templateColumns={
        screenMovil ? "1fr" : "repeat(auto-fill,minmax(auto, 100px))"
      }
      templateRows="2fr"
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
