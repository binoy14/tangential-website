import { MdContactPage } from "react-icons/md";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon: MdContactPage,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the page",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "reference",
      to: [{ type: "navigationLink" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "section" }],
        },
      ],
    },
  ],
};
