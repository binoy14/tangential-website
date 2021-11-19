import { Story, Meta } from "@storybook/react";
import { Navigation, UiProps } from "./Navigation";

export default {
  component: Navigation,
  title: "Navigation",
} as Meta;

const Template: Story<UiProps> = (args) => <Navigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      link: null,
      text: "Home",
    },
    {
      link: { current: "/about" },
      text: "About",
    },
    {
      link: { current: "/blog" },
      text: "Blog",
    },
    {
      link: { current: "/contact" },
      text: "Contact",
    },
  ],
};
