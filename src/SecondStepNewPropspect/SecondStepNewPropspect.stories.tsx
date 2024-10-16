import { Meta, StoryObj } from "@storybook/react";
import { SecondStepNewPropspect } from ".";

type Story = StoryObj<typeof SecondStepNewPropspect>;

const meta: Meta<typeof SecondStepNewPropspect> = {
  title: "SecondStepNewPropspect",
  component: SecondStepNewPropspect,
  argTypes: {
    data: {
      description: "Data to be displayed",
      control: {
        type: "object",
      },
    },
    onSubmit: {
      description: "Function to be called when submitting the form",
      action: "submitted",
    },
  },
};

export const Default: Story = {
  args: {
    data: {
      credits: [
        {
          type: "Vacation Credit",
          maxAmount: 20000000,
          maxRate: "1% M.V",
          maxTerm: "36 months",
          userEligible: true,
        },
        {
          type: "Free Investment",
          maxAmount: 50000000,
          maxRate: "1.5% M.V",
          maxTerm: "60 months",
          userEligible: true,
        },
        {
          type: "Crediaportes",
          maxAmount: 10000000,
          maxRate: "0.5% M.V",
          maxTerm: "30 months",
          userEligible: false,
        },
        {
          type: "Educational Credit",
          maxAmount: 30000000,
          maxRate: "1.2% M.V",
          maxTerm: "48 months",
          userEligible: true,
        },
      ],
    },
    isMobile: true,
    onSubmit: (data) => console.log(data),
  },
};

export default meta;
