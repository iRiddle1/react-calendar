import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={action("cliecked")} />
);

export const PrimaryButtonTemplate = Template.bind({});
export const DisabledButtonTemplate = Template.bind({});

PrimaryButtonTemplate.args = {
  value: "Добавить",
  ...PrimaryButtonTemplate.args,
};

DisabledButtonTemplate.args = {
  value: "Добавить",
  disabled: true,
  ...DisabledButtonTemplate.args,
};
