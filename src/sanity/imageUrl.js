import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function buildImageUrl(source) {
  return builder.image(source);
}
