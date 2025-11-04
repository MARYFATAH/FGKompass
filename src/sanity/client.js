import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "gskjd2wu",
  dataset: "fgkompass",
  apiVersion: "2024-01-01",
  useCdn: true,
});
