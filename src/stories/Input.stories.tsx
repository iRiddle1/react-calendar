import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, TextArea } from "../components/Input";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const TemplateInput: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

const TemplateTextArea: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args} />
);

export const InputTemplate = TemplateInput.bind({});
export const TextAreaTemplate = TemplateTextArea.bind({});

InputTemplate.args = {
  placeholder: "Введите текст",
  gap: "md",
  ...InputTemplate.args,
};

TextAreaTemplate.args = {
  placeholder: "Введите текст",
  gap: "md",
  ...TextAreaTemplate.args,
};
