import { SectionProps } from "@binoy14/ui";
import { Story, Meta } from "@storybook/react";
import { Section } from "./Section";

export default {
  component: Section,
  title: "Section",
  parameters: {
    backgrounds: {
      default: "blue",
      values: [{ name: "blue", value: "#00aced" }],
    },
  },
} as Meta;

const Template: Story<SectionProps> = ({ children, ...args }) => <Section {...args}>{children}</Section>;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <h1 className="text-3xl">Hey 👋, I'm Binoy</h1>
      <span>Web Developer, React Groupie and GraphQL Enthusiast</span>
    </>
  ),
  type: "light",
};
