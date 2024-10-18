import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { MenuUser, MenuUserProps } from ".";

const meta: Meta<typeof MenuUser> = {
  title: "components/navigation/MenuUser",
  component: MenuUser,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    userName: {
      control: { type: "text" },
      description: "The name of the user displayed in the menu.",
    },
    businessUnit: {
      control: { type: "text" },
      description:
        "The name of the business unit or department the user belongs to.",
    },
    avatar: {
      control: { type: "boolean" },
      description: "Whether to display an avatar for the user.",
    },
  },
};

type Story = StoryObj<typeof MenuUser>;

export const Default: Story = (args: MenuUserProps) => <MenuUser {...args} />;
Default.args = {
  userName: "Name",
  businessUnit: "Business Unit",
  avatar: true,
};

export default meta;
