import type { Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "https://deno.land/std@0.224.0/http/cookie.ts";

interface Data {
    isAllowed: boolean;
  }
  
export const handler: Handlers<Data> = {
    GET(req, ctx) {
        const cookies = getCookies(req.headers);

        return ctx.render!({ isAllowed: cookies.auth === "bar" });
    },
};

export default function Home({ data }: PageProps<Data>) {
    return (
        <div class="flex flex-col p-8">

            {data.isAllowed ? "Here is some secret" : "You are not allowed here"}
            
            <a href="/logout">Logout</a>
        
        </div>
    );
}
  
