import React from "react";
import { MdSearch } from "react-icons/md";
import { Button } from "@inubekit/button";
import { Textfield } from "@inubekit/textfield";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { RadioClient } from "@components/cards/RadioClient";
import { IClient } from "@context/AppContext/types";

import { IClientState } from "./types";
import {
  StyledClients,
  StyledClientsList,
  StyledNoResults,
  StyledClientsItem,
} from "./styles";

function NoResultsMessage({ search }: { search: string }) {
  return (
    <StyledNoResults>
      <Text size="medium">No se encontraron resultados para "{search}".</Text>
      <Text size="medium">
        Por favor, intenta modificando los parámetros de búsqueda.
      </Text>
    </StyledNoResults>
  );
}

interface ClientsUIProps {
  clients: IClient[];
  search: string;
  client: IClientState;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClientChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterClients: (clients: IClient[], search: string) => IClient[];
  handleSubmit: (event?: Event) => void;
}

function ClientsUI(props: ClientsUIProps) {
  const {
    clients,
    search,
    client,
    handleSearchChange,
    filterClients,
    handleClientChange,
    handleSubmit,
  } = props;

  const filteredClients = filterClients(clients, search);

  return (
    <StyledClients>
      <Text type="title" as="h2" textAlign="center">
        Unidades de negocio
      </Text>
      <Text size="medium" textAlign="center">
        Selecciona la unidad de negocio con la que vas a trabajar hoy
      </Text>
      <form>
        <Stack direction="column" alignItems="flex-end">
          {clients.length > 10 && (
            <Textfield
              placeholder="Buscar..."
              type="search"
              name="searchClients"
              id="searchClients"
              value={search}
              fullwidth={true}
              onChange={handleSearchChange}
              iconBefore={<MdSearch size={22} />}
            />
          )}
          {filteredClients.length === 0 && <NoResultsMessage search={search} />}
          <StyledClientsList $scroll={clients.length > 5}>
            <Stack direction="column" alignItems="center" gap="8px">
              {filteredClients.map((client) => (
                <StyledClientsItem key={client.id}>
                  <RadioClient
                    name="client"
                    label={client.name}
                    id={client.id}
                    value={client.name}
                    logo={client.logo}
                    handleChange={handleClientChange}
                  />
                </StyledClientsItem>
              ))}
            </Stack>
          </StyledClientsList>
          <Button
            type="button"
            children="Continuar"
            disabled={client.value}
            onClick={handleSubmit}
          />
        </Stack>
      </form>
    </StyledClients>
  );
}

export { ClientsUI };
