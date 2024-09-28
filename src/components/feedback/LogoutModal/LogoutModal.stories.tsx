import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";

import { ILogoutModalProps, LogoutModal } from ".";

const story = {
  title: "components/feedback/logout",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    handleShowBlanket: {
      action: "handleShowBlanket",
      description: "Function to toggle the visibility of the modal (blanket).",
    },
    logoutPath: {
      control: { type: "text" },
      description: "Path to navigate to when the user logs out.",
    },
  },
};

const Default = (args: ILogoutModalProps) => {
  const [showBlanket, setShowBlanket] = useState(false);

  const handleShowBlanket = () => {
    setShowBlanket(!showBlanket);
  };

  return (
    <Stack padding="16px">
      <Button onClick={handleShowBlanket}>Cerrar sesión</Button>
      {showBlanket && (
        <LogoutModal {...args} handleShowBlanket={handleShowBlanket} />
      )}
    </Stack>
  );
};

Default.args = {
  handleShowBlanket: action("handleShowBlanket"),
  logoutPath: "/",
};

export { Default };
export default story;
