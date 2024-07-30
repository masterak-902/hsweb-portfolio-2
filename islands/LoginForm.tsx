import { Button } from "../components/Button.tsx";

export default function Login() {

    // Turnstile documentation(client code)
    // https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/

    return (
        <form method="post" action="/api/login">
            
            <h2 class="mb-4 text-2xl">ログイン画面</h2>

            <div>
                <input class="mb-4 p-2 border-2 rounded-md" type="text" name="username" placeholder="ユーザーIDを入力してください" /><br />
                <input class="mb-4 p-2 border-2 rounded-md" type="password" name="password" placeholder="パスワードを入力してください" />
            </div>
            
            <Button>ログイン</Button>
            
        </form>
    );
};