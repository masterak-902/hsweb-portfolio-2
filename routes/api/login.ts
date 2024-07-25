import { Handlers } from "$fresh/server.ts";
import { setCookie } from "$std/http/cookie.ts";
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
            httpOnly: true, // ensures the cookie is not accessible via JavaScript
            });

            headers.set("location", "/dashboard");
            return new Response(null, {
                status: 303,
                headers,
                });

        } else {
            const headers = new Headers();
            //エラーコード303はリダイレクトを示す
            //エラーコード401は認証エラーを示す
            headers.set("location", "/login_error");
            return new Response(null, {
                status: 303,
                headers,
                });

        }
    },
};