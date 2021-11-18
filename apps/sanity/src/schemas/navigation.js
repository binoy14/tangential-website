export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "reference", to: [{ type: "navigationLink" }] }],
      description: "Links of the navigation",
    },
  ],
};
