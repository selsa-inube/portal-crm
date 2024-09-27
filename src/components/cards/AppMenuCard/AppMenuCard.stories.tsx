import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

import { creditConfig } from "@src/config/credit/breadcrumbs.config";

import { AppMenuCard, AppMenuCardProps } from "./index";

const story = {
  components: [AppMenuCard],
  title: "components/cards/AppMenuCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    icon: {
      control: { type: "element" },
      description:
        "Icon displayed on the card, typically retrieved from the `appsConfig` array.",
    },
    label: {
      control: { type: "text" },
      description: "The label or title displayed on the card.",
    },
    description: {
      control: { type: "text" },
      description:
        "A brief description of what the card represents or its functionality.",
    },
    url: {
      control: { type: "text" },
      description: "URL that the card links to when clicked.",
    },
    domain: {
      control: { type: "text" },
      description:
        "Represents the domain or category that the card is associated with.",
    },
  },
};

const Default = (args: AppMenuCardProps) => <AppMenuCard {...args} />;

Default.args = {
  icon: creditConfig[0].icon,
  label: "users",
  description: "invite, edit, activate and delete Linix users",
  url: "/",
  domain: "color",
};

export default story;

export { Default };
