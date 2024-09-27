import { BrowserRouter } from "react-router-dom";
import { MdAndroid } from "react-icons/md";
import { Meta, StoryFn } from "@storybook/react";

import { MenuSection, MenuSectionProps } from ".";
import { ISection } from "./types";

const meta: Meta<typeof MenuSection> = {
  title: "components/navigation/MenuSection",
  component: MenuSection,
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    sections: {
      control: { type: "object" },
      description:
        "An array of section objects, each containing a title and a list of links.",
    },
    divider: {
      control: { type: "boolean" },
      description: "Controls whether a divider is displayed between sections.",
    },
    spacing: {
      control: { type: "radio", options: ["compact", "wide"] },
      description: "Defines the spacing around the menu sections.",
    },
  },
};

const sections: ISection[] = [
  {
    title: "Heading 1",
    links: [
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
    ],
  },
  {
    title: "Heading 2",
    links: [
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
      {
        title: "Title",
        description: "Description",
        path: "/",
        iconAfter: <MdAndroid />,
      },
    ],
  },
];

export const Default = (args: MenuSectionProps) => <MenuSection {...args} />;
Default.args = {
  sections: sections,
  divider: false,
  spacing: "wide",
};

export default meta;
