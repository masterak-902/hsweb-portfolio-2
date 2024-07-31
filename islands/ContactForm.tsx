export default function ContactForm() {
    const sitekey = Deno.env.get('RECAPTCHA_SITE_KEY');

    return (

        <form method="POST" action="/api/post" class="flex flex-col bg-slate-100 mt-8 mb-8 py-6 px-8 max-w-[760px] h-auto mx-auto rounded drop-shadow">
            <h2 class="text-2xl mb-4 text-center font-bold">お問い合わせフォーム</h2>
            <label class="mb-2" for="email">メールアドレス</label>
            <input class="mb-4 p-2" type="email" id="email" name="email" />
            <label class="mb-2" for="message">お問い合わせ内容</label>
            <textarea class="resize-none mb-4 p-2"  rows={15} id="message" name="message"></textarea>
            <div class="checkbox mb-3 text-center">
                {/* <!-- The following line controls and configures the Turnstile widget. --> */}
                <div class="cf-turnstile" data-sitekey={sitekey} data-theme="light"></div>
                {/* <!-- end. --> */}
            </div>

            {/* Set to 'disable' until CloudFlare Turnstile resolves */}
            <button type="submit" class="text-center w-[300px] mx-auto px-2 py-1 border-gray-400 border-2 rounded bg-white hover:bg-gray-200 transition-colors">送信</button>
        </form>
    )
}