import { Meta, StoryObj } from "@storybook/react";
import { RadioInput } from ".";

type Story = StoryObj<typeof RadioInput>;

const meta: Meta<typeof RadioInput> = {
  component: RadioInput,
  title: "components/inputs/RadioInput",
  parameters: {
    docs: {
      description: {
        component:
          "The RadioInput component is a flexible and stylish input that allows users to select one option from a list of options.",
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "id of the component",
    },
    name: {
      control: {
        type: "text",
      },
      description: "name of the component",
    },
    checked: {
      control: {
        type: "text",
      },
      description: "value of the component",
    },
    onChange: {
      description: "onChange of the component",
    },
  },
};

export const Default: Story = {
  args: {
    id: "radio",
    name: "radio",
    checked: true,
    label: "Radio",
    onChange: (selected: boolean) => console.log(selected),
  },
};

export default meta;
