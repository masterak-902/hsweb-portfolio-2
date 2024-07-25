import { Handlers } from "$fresh/server.ts";
import { setCookie } from "https://deno.land/std@0.224.0/http/cookie.ts";

export const handler: Handlers = {
  async POST(req) {
    const url = new URL(req.url);
    //本来はここにデータベースとの接続処理を書く
    const form = await req.formData();
    console.log(form);

    if (form.get("username") === "guest" && form.get("password") === "password") {
      const headers = new Headers();
      setCookie(headers, {
        name: "auth",
        value: "bar", // this should be a unique value for each session
        maxAge: 120,
        sameSite: "Lax", // this is important to prevent CSRF attacks
        domain: url.hostname,
        path: "/",
        secure: true,
      });

      headers.set("location", "/dashboard");
      return new Response(null, {
        status: 303, // "See Other"
        headers,
      });
    } else {
      return new Response(null, {
        status: 403,
      });
    }
  },
};