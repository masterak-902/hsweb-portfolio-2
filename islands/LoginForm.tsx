import { Button } from "../components/Button.tsx";

export default function Login() {
    return (
        <form name="login_form">
            
            <h2 class="mb-4 text-2xl">ログイン画面</h2>

            <div>
                <input class="mb-4 p-2 border-2 rounded-md" type="id" name="user_id" placeholder="ユーザーIDを入力してください" /><br />
                <input class="mb-4 p-2 border-2 rounded-md" type="password" name="password" placeholder="パスワードを入力してください" />
            </div>

            <Button>ログイン</Button>
            
        </form>
    );
};