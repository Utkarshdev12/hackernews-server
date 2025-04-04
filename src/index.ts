import { allroutes } from "./routes/routes.js";
import { serve } from "@hono/node-server";


serve(
  {
    fetch: allroutes.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`✅ Server is running on http://localhost:${info.port}`);
  }
);

