export default {
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "date", title: "Date", type: "datetime" },
    { name: "endDate", title: "End Date", type: "datetime" },
    { name: "description", title: "Description", type: "blockContent" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "category", title: "Category", type: "string", options: { list: ["wedding", "conference", "entertainment", "seasonal"] } },
  ],
};
