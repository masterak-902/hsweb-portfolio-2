import LoginForm from "../islands/LoginForm.tsx";
// import type { Handlers } from "$fresh/server.ts";
// import { getCookies } from "$std/http/cookie.ts";


//すでにログインしている場合はダッシュボードにリダイレクト
//FIX: もしcookies.authが存在する場合は、/dashboardにリダイレクトされるが、authが一致しない場合は/loginに戻されて、循環してしまう。
// export const handler: Handlers = {
//     GET(req, ctx) {
//         const cookies = getCookies(req.headers);

//         if (!cookies.auth) {
//             return ctx.render!();
//         } else {
//             const url = new URL(req.url);
//             url.pathname = "/dashboard";
//             return Response.redirect(url);
//         }
//     },
// };

export default function Home() {
    return(
        <div class="py-8 px-12">
            <LoginForm />
            <p class="text-red-500">ログインに失敗しました。 再度お試しください。</p>
            <div class="mt-8">
                <h3 class="text-xl font-bold mb-2">ゲストアカウント</h3>
                <p class="text-xl ml-2 mb-2">ユーザーID : guest</p>
                <p class="text-xl ml-2 mb-2">パスワード : password</p>
            </div>
        </div>
    )
}