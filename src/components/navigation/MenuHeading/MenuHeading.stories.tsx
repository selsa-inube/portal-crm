import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { MenuHeading, MenuHeadingProps } from ".";

const meta: Meta<typeof MenuHeading> = {
  title: "components/navigation/MenuHeading",
  component: MenuHeading,
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
      description: "The heading title displayed in the menu.",
    },
  },
};

export const Default = (args: MenuHeadingProps) => <MenuHeading {...args} />;
Default.args = {
  title: "Title",
};

export default meta;
