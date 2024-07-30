
// https://fresh.deno.dev/docs/concepts/middleware
// A middleware is defined in a _middleware.ts file. It will intercept the request in order for you to perform custom logic before or after the route handler.
// This allows modifying or checking requests and responses. Common use-cases for this are logging, authentication, and performance monitoring.

// Each middleware gets passed a next function in the context argument that is used to trigger child handlers.
// The ctx also has a state property that can be used to pass arbitrary data to downstream (or upstream) handlers.
// This state is included in PageProps by default, which is available to both the special _app wrapper and normal routes.
// ctx.state is normally set by modifying its properties, e.g. ctx.state.loggedIn = true, but you can also replace the entire object like ctx.state = { loggedIn: true }.

// This middle layer provides login authentication and token management.

// import type { Handlers } from "$fresh/server.ts";
// import { getCookies } from "$std/http/cookie.ts";

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
// export const handler: Handlers = {
//     GET(req, ctx) {
//       const cookies = getCookies(req.headers);
//       if (cookies.auth === "bar") {
//         return ctx.render!();
//       } else {
//         const url = new URL(req.url);
//         url.pathname = "/login";
//         return Response.redirect(url);
//       }
//     },
//   };