import { MdNavigation } from "react-icons/md";

export default {
  name: "navigationLink",
  title: "Navigation Link",
  type: "document",
  icon: MdNavigation,
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
      description: "Title of the link",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "slug",
      description: "Link url",
      options: {
        source: "text",
      },
    },
  ],
};
