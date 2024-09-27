import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { SummaryProspect, SummaryProspectProps } from "../index";
import { props } from "./props";

export default {
  title: "Components/inputs/SummaryProspect",
  argTypes: props,
  component: SummaryProspect,
} as Meta<typeof SummaryProspect>;

const Template: StoryObj<SummaryProspectProps> = {
  render: (args) => {
    const handleIconClick = () => {
      action("onIconClick");
    };

    return <SummaryProspect {...args} onIconClick={handleIconClick} />;
  },
};

export const Default: StoryObj<SummaryProspectProps> = {
  ...Template,
  args: {
    items: [{ title: "Obligaciones recogidas", amount: "$5.000.000" }],
  },
};

export const WithoutIcon: StoryObj<SummaryProspectProps> = {
  ...Template,
  args: {
    items: [
      { title: "Monto prestamo", amount: "$16.000.000" },
      { title: "Obligaciones recogidas", amount: "$5.000.000" },
      { title: "Gastos descontables", amount: "$1.000.000" },
      { title: "Neto a girar", amount: "$10.000.000" },
      { title: "Cuotas ordinarias", amount: "$1.200.000" },
    ],
    showIcon: false,
  },
};
