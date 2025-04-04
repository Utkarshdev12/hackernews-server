import { allroutes } from "./routes/routes.js";
import { serve } from "@hono/node-server";

const port = Number(process.env.PORT) || 3000;

serve(
  {
    fetch: allroutes.fetch,
    port,
  },
  (info) => {
    console.log(`✅ Server is running on http://0.0.0.0:${info.port}`);
  }
);
