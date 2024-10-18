import { BrowserRouter } from "react-router-dom";
import { MdContacts } from "react-icons/md";
import { StoryFn, Meta } from "@storybook/react";

import { AppCard, AppCardProps } from "..";

const meta: Meta<typeof AppCard> = {
  component: AppCard,
  title: "components/cards/AppCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "The title of the card.",
    },
    description: {
      control: { type: "text" },
      description: "The description text displayed on the card.",
    },
    icon: {
      description: "The icon displayed on the card, using a React component.",
    },
    url: {
      control: { type: "text" },
      description: "The URL associated with the card.",
    },
  },
};

const Template: StoryFn<AppCardProps> = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Card Title",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icon: <MdContacts />,
  url: "/credit",
};

export default meta;
