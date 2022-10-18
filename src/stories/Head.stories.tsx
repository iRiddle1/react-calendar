import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { H1, H2 } from "../components/Head";

export default {
  title: "Head",
  component: H1,
  argTypes: {
    gap: {
      options: ["xlg", "lg", "md", "sm", "xsm"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof H1>;

const TemplateH1: ComponentStory<typeof H1> = (args) => <H1 {...args} />;
const TemplateH2: ComponentStory<typeof H1> = (args) => <H2 {...args} />;

export const H1Template = TemplateH1.bind({});
export const H2Template = TemplateH2.bind({});

H1Template.args = {
  title: "Заголовок",
  gap: "md",
};

H2Template.args = {
  title: "Заголовок",
  gap: "md",
};
