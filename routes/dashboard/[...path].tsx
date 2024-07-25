import type { Handlers } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";

// interface Data {
//     isAllowed: boolean;
//   }
//   Add <Login> and logout to index
// export const handler: Handlers<Data> = {
//     GET(req, ctx) {
//         const cookies = getCookies(req.headers);
//         return ctx.render!({ isAllowed: cookies.auth === "bar" });
//     },
// };
// export default function Home({ data }: PageProps<Data>) {
//     return (
//         <div class="flex flex-col p-8">
//             {data.isAllowed ? "Here is some secret" : "You are not allowed here"}
//             <a href="/logout">Logout</a>
//         </div>
//     );
// }

//   Handle non-logged-in users
export const handler: Handlers = {
    GET(req, ctx) {
      const cookies = getCookies(req.headers);
      if (cookies.auth === "bar") {
        return ctx.render!();
      } else {
        const url = new URL(req.url);
        url.pathname = "/login";
        return Response.redirect(url);
      }
    },
  };


export default function Home() {
    return (
        <div class="flex flex-col p-8">
            Here is some secret

            <a href="/logout">Logout</a>
        </div>
    );
  }
  
