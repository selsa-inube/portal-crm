import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom";
import { Grid } from "@inubekit/grid";
import { Header } from "@inubekit/header";
import { Nav } from "@inubekit/nav";
import { useMediaQuery } from "@inubekit/hooks";

import { nav } from "@config/nav";
import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
} from "./styles";
import linparLogo from "@assets/images/linpar.png";
import { handlelogout } from "./config";

const renderLogo = (imgUrl: string) => {
  return (
    <StyledContentImg to="/">
      <StyledLogo src={imgUrl} />
    </StyledContentImg>
  );
};

function AppPage() {
  const { user, logout } = useAuth0();
  const isTablet = useMediaQuery("(max-width: 944px)");

  const actionNAv = handlelogout(logout);

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <Header
          portalId="portal"
          navigation={nav}
          logoURL={renderLogo(linparLogo)}
          userName={user?.name}
          client={"Selsa"}
        />
        <StyledContainer>
          <Grid
            templateColumns={!isTablet ? "auto 1fr" : "1fr"}
            alignContent="unset"
          >
            {!isTablet && <Nav navigation={nav} actions={actionNAv} />}
            <StyledMain>
              <Outlet />
            </StyledMain>
          </Grid>
        </StyledContainer>
      </Grid>
    </StyledAppPage>
  );
}

export { AppPage };
