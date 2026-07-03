export default {
  name: "experience",
  title: "Experiences",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "description", title: "Description", type: "blockContent" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "duration", title: "Duration", type: "string" },
    { name: "includes", title: "What's Included", type: "array", of: [{ type: "string" }] },
    { name: "type", title: "Type", type: "string", options: { list: ["excursion", "cultural", "wellness", "corporate"] } },
  ],
};
