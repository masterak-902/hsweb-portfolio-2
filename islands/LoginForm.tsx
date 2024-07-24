import { Button } from "../components/Button.tsx";

export default function Login() {
    return (
        <form name="login_form">
            
            <h1>ログイン画面</h1>

            <div>
                <input type="id" name="user_id" placeholder="ユーザーIDを入力してください" /><br />
                <input type="password" name="password" placeholder="パスワードを入力してください" />
            </div>

            <Button>ログイン</Button>
            
        </form>
    );
};