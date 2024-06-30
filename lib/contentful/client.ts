import { createClient } from "contentful";

export const client = createClient({
  space: process.env.scope ?? "",
  accessToken: process.env.accessToken ?? "",
});
