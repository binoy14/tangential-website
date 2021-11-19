export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
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
