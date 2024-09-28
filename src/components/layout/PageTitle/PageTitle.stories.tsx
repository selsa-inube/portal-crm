import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

import { creditConfig } from "@src/config/credit/breadcrumbs.config";

import { PageTitle, PageTitleProps } from "./index";

const story = {
  component: [PageTitle],
  title: "layouts/PageTitle",
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
      description: "The main title displayed on the page.",
    },
    description: {
      control: { type: "text" },
      description: "A short description or subtitle displayed below the title.",
    },
    icon: {
      control: { type: "element" },
      description: "An optional icon displayed next to the title.",
    },
  },
};

const Template: StoryFn<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: creditConfig[0].label,
  description: creditConfig[0].description,
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  title: creditConfig[0].label,
  description: creditConfig[0].description,
  icon: creditConfig[0].icon,
};

export default story;
