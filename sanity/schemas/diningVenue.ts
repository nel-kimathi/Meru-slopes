export default {
  name: "diningVenue",
  title: "Dining Venues",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (Rule: any) => Rule.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    { name: "description", title: "Description", type: "blockContent" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "hours", title: "Opening Hours", type: "string" },
    { name: "cuisine", title: "Cuisine Type", type: "string" },
    { name: "capacity", title: "Capacity", type: "number" },
    { name: "chefName", title: "Chef Name", type: "string" },
    { name: "chefQuote", title: "Chef Quote", type: "text", rows: 2 },
    { name: "chefImage", title: "Chef Photo", type: "image", options: { hotspot: true } },
  ],
};
