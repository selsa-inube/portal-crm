import { useContext } from "react";
import { Stack } from "@inubekit/stack";
import { MdOutlineDoorFront } from "react-icons/md";

import { AppContext } from "@context/AppContext";
import { AppCard } from "@components/cards/AppCard";
import { PageTitle } from "@components/layout/PageTitle";
import { mockAppCards } from "@src/config/home/appcards.config";

import { StyledTitle, StyledContainerCards } from "./styles";

function Home() {
  const { user } = useContext(AppContext);

  const username = user.username.split(" ")[0];

  return (
    <>
      <StyledTitle>
        <PageTitle
          title={`Bienvenido, ${username}`}
          description="Seleccione una opción para empezar."
          icon={<MdOutlineDoorFront />}
        />
      </StyledTitle>
      <StyledContainerCards>
        {mockAppCards.map((card, index) => (
          <Stack key={index}>
            <AppCard
              key={card.id}
              label={card.label}
              description={card.description}
              icon={card.icon}
              url={card.url}
            />
          </Stack>
        ))}
      </StyledContainerCards>
    </>
  );
}

export { Home };
