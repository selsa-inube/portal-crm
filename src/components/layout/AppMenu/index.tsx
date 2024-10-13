import { Stack } from "@inubekit/stack";
import { Breadcrumbs } from "@inubekit/breadcrumbs";

import { StyledAppMenu } from "./styles";
import { IRoute } from "./types";
import { PageTitle } from "../PageTitle";

interface AppMenuProps {
  appName: string;
  appDescription: string;
  appRoute: IRoute[];
  children: React.ReactNode;
  navigatePage: string;
}

function AppMenu(props: AppMenuProps) {
  const { appName, appDescription, children, appRoute, navigatePage } = props;

  return (
    <StyledAppMenu>
      <Stack direction="column">
        <Breadcrumbs crumbs={appRoute} />
        <Stack margin="24px 0px">
          <PageTitle
            title={appName}
            description={appDescription}
            navigatePage={navigatePage}
          />
        </Stack>
      </Stack>
      {children}
    </StyledAppMenu>
  );
}

export { AppMenu };
export type { AppMenuProps };
