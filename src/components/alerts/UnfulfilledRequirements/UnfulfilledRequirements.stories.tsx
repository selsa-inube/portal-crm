import { Meta, StoryObj } from "@storybook/react";
import { UnfulfilledRequirements } from ".";

type Story = StoryObj<typeof UnfulfilledRequirements>;

const meta: Meta<typeof UnfulfilledRequirements> = {
  component: UnfulfilledRequirements,
  title: "components/alerts/UnfulfilledRequirements",
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "title of the component",
    },
    requirement: {
      control: {
        type: "text",
      },
      description: "requirement of the component",
    },
    causeNoncompliance: {
      control: {
        type: "text",
      },
      description: "causeNoncompliance of the component",
    },
    isMobile: {
      control: {
        type: "boolean",
      },
      description: "isMobile of the component",
    },
  },
};

export const Default: Story = {
  args: {
    title: "Alerta",
    requirement: "Requiere 90 días de antigüedad.",
    causeNoncompliance: "El cliente tine solo 60 días de afiliación.",
  },
};

export default meta;
