import { createClient } from "@sanity/client";

export const client = createClient({
  projectId : 'oly9o4qq',
  dataset : "production",
  apiVersion : '2022-12-08',
  useCdn : false
})

