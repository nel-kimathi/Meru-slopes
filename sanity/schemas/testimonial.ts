export default {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    { name: "name", title: "Guest Name", type: "string" },
    { name: "quote", title: "Quote", type: "text", rows: 3 },
    { name: "avatar", title: "Avatar", type: "image", options: { hotspot: true } },
    { name: "rating", title: "Rating", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
    { name: "source", title: "Source", type: "string", options: { list: ["tripadvisor", "google", "booking"] } },
  ],
};
