import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PriorityCircle from "../components/PriorityCircle";

export default {
  title: "PriorityCircle",
  component: PriorityCircle,
  argTypes: {
    slug: {
      options: ["critical", "high", "medium", "low", "none"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof PriorityCircle>;

const Template: ComponentStory<typeof PriorityCircle> = (args) => (
  <PriorityCircle {...args} title={args.slug} />
);

export const PriorityCircleTemplate = Template.bind({});

PriorityCircleTemplate.args = {
  title: "",
  slug: "none",
  className: "",
  isActive: false,
};
