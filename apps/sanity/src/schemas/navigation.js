import { MdNavigation } from "react-icons/md";

export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: MdNavigation,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Navigation Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "reference", to: [{ type: "navigationLink" }] }],
      description: "Links of the navigation",
      validation: (Rule) => Rule.required(),
    },
  ],
};
