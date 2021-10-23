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
      href: "/home",
      text: "Home",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/blog",
      text: "Blog",
    },
    {
      href: "/contact",
      text: "Contact",
    },
  ],
};
