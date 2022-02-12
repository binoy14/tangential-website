export default {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "header",
      title: "Header",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtext",
      title: "Subtext",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "header",
    },
    prepare: ({ title }) => ({ title, subtitle: "Section" }),
  },
};
