import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Footer from "../components/Footer";

export default {
  title: "Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const FooterTemplate = Template.bind({});
