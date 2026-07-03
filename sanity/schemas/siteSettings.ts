export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "name", title: "Hotel Name", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "heroVideoUrl", title: "Hero Video URL", type: "url" },
    { name: "heroPosterUrl", title: "Hero Poster URL", type: "image", options: { hotspot: true } },
    { name: "gmName", title: "General Manager Name", type: "string" },
    { name: "gmMessage", title: "General Manager Message", type: "text", rows: 4 },
    { name: "gmPhoto", title: "General Manager Photo", type: "image", options: { hotspot: true } },
    { name: "contact", title: "Contact Info", type: "object", fields: [
      { name: "phone1", title: "Phone 1", type: "string" },
      { name: "phone2", title: "Phone 2", type: "string" },
      { name: "email1", title: "Email 1", type: "string" },
      { name: "email2", title: "Email 2", type: "string" },
      { name: "address", title: "Address", type: "string" },
      { name: "googleMapsUrl", title: "Google Maps URL", type: "url" },
      { name: "whatsapp", title: "WhatsApp Number", type: "string" },
    ]},
  ],
};
