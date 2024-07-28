import { Button } from "../components/Button.tsx";

export default function ContactForm() {
    return (
        <form method="post" action="/api/send_message.ts" class="bg-slate-100 mt-8 py-6 px-8 max-w-[760px] h-auto mx-auto rounded drop-shadow">
            <h2 class="text-2xl mb-4 text-center font-bold">お問い合わせフォーム</h2>
            <div class="flex flex-col">
                <label class="mb-2" for="email">メールアドレス</label>
                <input class="mb-4 p-2" type="email" id="email" name="email" />
                <label class="mb-2" for="message">お問い合わせ内容</label>
                <textarea class="resize-none mb-4 p-2"  rows={15} id="message" name="message"></textarea>
                <Button>送信</Button>
            </div>
        </form>
    )
}