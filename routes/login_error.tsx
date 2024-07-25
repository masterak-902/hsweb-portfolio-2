import LoginForm from "../islands/LoginForm.tsx";

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