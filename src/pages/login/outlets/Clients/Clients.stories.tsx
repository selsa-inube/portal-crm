import React from "react";
import { BrowserRouter } from "react-router-dom";

import { clientsDataMock } from "@mocks/login/clients.mock";

import { Clients } from ".";

const story = {
  components: [Clients],
  title: "components/layouts/login/outlets/clients",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Clients clients={clientsDataMock} />;

export { Default };
export default story;
