import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { MenuItem, MenuItemProps } from ".";

const meta: Meta<typeof MenuItem> = {
  title: "components/navigation/MenuItem",
  component: MenuItem,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title displayed on the menu item.",
    },
    description: {
      control: { type: "text" },
      description: "A brief description or subtitle for the menu item.",
    },
    iconBefore: {
      description: "An optional icon displayed before the title.",
    },
    iconAfter: {
      description: "An optional icon displayed after the title.",
    },
    spacing: {
      control: { type: "radio", options: ["narrow", "wide"] },
      description: "Defines the spacing around the menu item.",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Disables the menu item if set to true.",
    },
  },
};

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = (args: MenuItemProps) => <MenuItem {...args} />;
Default.args = {
  title: "Title",
  description: "Description",
  iconBefore: <MdAndroid />,
  spacing: "wide",
  isDisabled: false,
};

export const IconAfter: Story = (args: MenuItemProps) => <MenuItem {...args} />;
IconAfter.args = {
  title: "Title",
  description: "Description",
  iconAfter: <MdAndroid />,
  spacing: "wide",
  isDisabled: false,
};

export const Disabled: Story = (args: MenuItemProps) => <MenuItem {...args} />;
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

export default meta;
