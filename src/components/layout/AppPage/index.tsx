import { useContext, useEffect, useRef, useState } from "react";
import { MdOutlineChevronRight, MdLogout } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { Grid } from "@inubekit/grid";
import { useMediaQuery } from "@inubekit/hooks";
import { Nav } from "@inubekit/nav";
import { Header } from "@inubekit/header";
import { Icon } from "@inubekit/icon";

import { nav } from "@src/config/navigation/nav.config";
import { MenuSection } from "@components/navigation/MenuSection";
import { MenuUser } from "@components/navigation/MenuUser";
import { LogoutModal } from "@components/feedback/LogoutModal";
import { logoutConfig } from "@src/config/credit/breadcrumbs.config";
import { BusinessUnitChange } from "@components/inputs/BusinessUnitChange";
import { clientsDataMock } from "@mocks/login/clients.mock";
import { AppContext } from "@context/AppContext";

import {
  StyledAppPage,
  StyledContainer,
  StyledContentImg,
  StyledLogo,
  StyledMain,
  StyledMenuContainer,
  StyledContainerNav,
  StyledCollapseIcon,
  StyledCollapse,
} from "./styles";

const renderLogo = (imgUrl: string) => (
  <StyledContentImg to="/home">
    <StyledLogo src={imgUrl} />
  </StyledContentImg>
);

export interface AppPageProps {
  showNav?: boolean;
}

function AppPage(props: AppPageProps) {
  const { showNav = true } = props;
  const { user } = useContext(AppContext);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const collapseMenuRef = useRef<HTMLDivElement>(null);
  const businessUnitChangeRef = useRef<HTMLDivElement>(null);

  const smallScreen = useMediaQuery("(max-width: 849px)");

  let columns;
  if (smallScreen) {
    columns = "1fr";
  } else {
    columns = showNav ? "auto 1fr" : "1fr";
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
      if (userMenuRef.current && event.target !== userMenuRef.current) {
        setShowUserMenu(false);
      }

      if (
        collapseMenuRef.current &&
        !collapseMenuRef.current.contains(event.target as Node) &&
        event.target !== collapseMenuRef.current &&
        businessUnitChangeRef.current &&
        !businessUnitChangeRef.current.contains(event.target as Node)
      ) {
        setCollapse(false);
      }
    }
  };

  useEffect(() => {
    const selectUser = document.querySelector("header div div:nth-child(2)");
    const handleToggleUserMenu = () => {
      setShowUserMenu(!showUserMenu);
    };

    document.addEventListener("mousedown", handleClickOutside);
    selectUser?.addEventListener("mouseup", handleToggleUserMenu);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserMenu]);

  const handleToggleLogoutModal = () => {
    setShowLogoutModal(!showLogoutModal);
    setShowUserMenu(false);
  };

  const sections = [
    {
      links: [
        {
          title: "Cerrar sesión",
          iconBefore: <MdLogout />,
          onClick: handleToggleLogoutModal,
        },
      ],
    },
  ];

  return (
    <StyledAppPage>
      <Grid templateRows="auto 1fr" height="100vh" justifyContent="unset">
        <Header
          portalId="portal"
          navigation={showNav ? nav : undefined}
          logoURL={renderLogo(user.operator.logo)}
          userName={user.username}
          client={user.company}
        />
        <StyledCollapseIcon
          $collapse={collapse}
          onClick={() => setCollapse(!collapse)}
          ref={collapseMenuRef}
        >
          <Icon
            icon={<MdOutlineChevronRight />}
            appearance="primary"
            size="24px"
            cursorHover
          />
        </StyledCollapseIcon>
        {collapse && (
          <StyledCollapse ref={businessUnitChangeRef}>
            <BusinessUnitChange clients={clientsDataMock} />
          </StyledCollapse>
        )}
        <StyledContainer>
          {showUserMenu && (
            <StyledMenuContainer ref={userMenuRef}>
              <MenuUser userName={user.username} businessUnit={user.company} />
              <MenuSection sections={sections} divider={true} />
            </StyledMenuContainer>
          )}
          {showLogoutModal && (
            <LogoutModal
              logoutPath={logoutConfig.logoutPath}
              handleShowBlanket={handleToggleLogoutModal}
            />
          )}
          <Grid templateColumns={columns} alignContent="unset">
            {showNav && !smallScreen && (
              <StyledContainerNav>
                <Nav
                  navigation={nav}
                  logoutPath={logoutConfig.logoutPath}
                  logoutTitle={logoutConfig.logoutTitle}
                />
              </StyledContainerNav>
            )}
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
