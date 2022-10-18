import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BadgeEvent from "../components/BadgeEvent";

export default {
  title: "BadgeEvent",
  component: BadgeEvent,
  argTypes: {
    priority: {
      options: ["critical", "high", "medium", "low", "none"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof BadgeEvent>;

const Template: ComponentStory<typeof BadgeEvent> = (args) => (
  <BadgeEvent {...args} />
);

export const BadgeEventTemplate = Template.bind({});

BadgeEventTemplate.args = {
  name: "Тест",
  priority: "critical",
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => alert(e),
};
