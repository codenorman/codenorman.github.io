export interface Resource {
  type: "blog-post" | "video" | "tutorial" | "book" | "podcast",
  title: string,
  url: string | string[],
  description: string
}
