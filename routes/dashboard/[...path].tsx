import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.224.0/http/cookie.ts";

interface Data {
    isAllowed: boolean;
  }
  
  export default function Home({ data }: PageProps<Data>) {
    return (
      <div>
        {data.isAllowed ? "Here is some secret" : "You are not allowed here"}
      </div>
    );
  }
  
  export const handler: Handlers<Data> = {
    GET(req, ctx) {
      const cookies = getCookies(req.headers);
  
      return ctx.render!({ isAllowed: cookies.auth === "bar" });
    },
  };