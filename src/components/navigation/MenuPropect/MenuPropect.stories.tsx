import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { MenuProspect, MenuProspectProps } from ".";

const meta: Meta<typeof MenuProspect> = {
  title: "components/navigation/MenuProspect",
  component: MenuProspect,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

type Story = StoryObj<typeof MenuProspect>;

export const Default: Story = (args: MenuProspectProps) => (
  <MenuProspect {...args} />
);
Default.args = {
  options: [
    {
      title: "Option 1",
      onClik: () => console.log("Option 1"),
      icon: <MdAndroid />,
    },
    {
      title: "Option 2",
      onClik: () => console.log("Option 2"),
      icon: <MdAndroid />,
    },
  ],
  onMouseLeave: () => console.log("Mouse leave"),
};

export default meta;
