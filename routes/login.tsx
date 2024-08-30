// import { Button } from '../components/Button.tsx';

// 1. Verify that you have valid session storage
// import type { Handlers } from '$fresh/server.ts';
// import { getCookies } from '$std/http/cookie.ts';
// export const handler: Handlers = {
//     GET(req, ctx) {
//         const cookies = getCookies(req.headers);
//         if (!cookies.auth) {
//             return ctx.render!();
//         } else {
//             const url = new URL(req.url);
//             url.pathname = '/dashboard';
//             return Response.redirect(url);
//         }
//     },
// };

// Turnstile documentation(client code)
// https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/

export default function Home() {
    return(
        <div class='py-8 px-12'>
            {/* <form method='post' >
                <h2 class='mb-4 text-2xl'>ログイン画面</h2>
                <div>
                    <input class='w-[300px] mb-4 p-2 border-2 rounded-md' type='text' name='username' placeholder='ユーザーIDを入力してください' /><br />
                    <input class='w-[300px] mb-4 p-2 border-2 rounded-md' type='password' name='password' placeholder='パスワードを入力してください' />
                </div>
                <Button>ログイン</Button>
            </form> */}
            <p class='text-red-500'>ログインに失敗しました。 再度お試しください。</p>
            <div class='mt-8'>
                <h3 class='text-xl font-bold mb-2'>ゲストアカウント</h3>
                <p class='text-xl ml-2 mb-2'>ユーザーID : guest</p>
                <p class='text-xl ml-2 mb-2'>パスワード : password</p>
            </div>
        </div>
    )
}