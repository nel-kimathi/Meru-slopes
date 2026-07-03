export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    { type: "block", styles: [{ title: "Normal", value: "normal" }, { title: "H2", value: "h2" }, { title: "H3", value: "h3" }] },
    { type: "image", options: { hotspot: true } },
  ],
};
