import { BrowserRouter } from "react-router-dom";
import { Meta, StoryFn } from "@storybook/react";

import { creditConfig } from "@src/config/credit/breadcrumbs.config";
import { PageTitle, PageTitleProps } from "./index";

const meta: Meta<PageTitleProps> = {
  component: PageTitle,
  title: "components/layouts/PageTitle",
  decorators: [
    (Story) => (
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
  ...Default.args,
  icon: creditConfig[0].icon,
};

export default meta;
