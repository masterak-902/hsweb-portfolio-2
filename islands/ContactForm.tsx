import { Button } from "../components/Button.tsx";

export default function ContactForm() {
    return (
        <main class="bg-slate-100 mt-8 py-6 px-8 max-w-[760px] h-auto mx-auto">
            <h2 class="text-2xl mb-4 text-center font-bold">お問い合わせフォーム</h2>
            <form class="flex flex-col">
                <label class="mb-2" for="email">メールアドレス</label>
                <input class="mb-4 p-2" type="email" id="email" name="email" />
                <label class="mb-2" for="message">お問い合わせ内容</label>
                <textarea class="resize-none mb-4 p-2"  rows={15} id="message" name="message"></textarea>
                <Button>送信</Button>
            </form>
        </main>
    )
}