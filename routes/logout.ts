import { Handlers } from "$fresh/server.ts";


export const handler: Handlers = {
  GET(req) {
    // Destruction of session storage
    sessionStorage.removeItem("jwt");

    const headers = new Headers(req.headers);
    headers.set("location", "/login");
    return new Response(null, {
      status: 302,
      headers,
    });
  },
};