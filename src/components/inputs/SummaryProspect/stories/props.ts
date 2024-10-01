import { ArgTypes } from "@storybook/react";

import { SummaryProspectProps } from "..";

const props: Partial<ArgTypes<SummaryProspectProps>> = {
  items: {
    control: "object",
    description:
      "List of items to be displayed, each containing a title and amount.",
  },
  showIcon: {
    control: "boolean",
    description: "Flag to show or hide the edit icon.",
  },
  onIconClick: {
    action: "onIconClick",
    description: "Function triggered when the edit icon is clicked.",
  },
};

export { props };
