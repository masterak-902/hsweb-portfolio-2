import { Handlers, type PageProps } from '$fresh/server.ts';

interface Props {
    message: string | null;
    isSuccessful: boolean;
  }

export const handler: Handlers<Props> = {

    // deno-lint-ignore no-unused-vars
    async GET(req, ctx) {
      return await ctx.render({ message: null, isSuccessful: false });
    },

    // 1. Define POST action from contact form
    // 2. Form data acquisition from post data.
    // 3. Processing acquired data into json format.
    // 4. Create a header and define the following
    //    -> X-API-KEY
    // 5. Execute fetch to Hono API(/sender)

    // https://fresh.deno.dev/docs/concepts/forms#handling-file-uploads

    async POST(req, ctx) {
    
        const form = await req.formData();

        // Turnstile injects a token in 'cf-turnstile-response'.
        const turnstile_token = form.get('cf-turnstile-response');
        const ip = req.headers.get('CF-Connecting-IP');

        const verification_formData = new FormData();
        verification_formData.append('secret', Deno.env.get('RECAPTCHA_SECRET_KEY') ?? '');
        verification_formData.append('response', turnstile_token ?? '');
        verification_formData.append('remoteip', ip ?? '');

        const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
        const result = await fetch(url, {
            body: verification_formData,
            method: 'POST',
        });
        
        const outcome = await result.json();
        if (outcome.success) {
            // ----------------------------------------------------------------------------------------------------------------------------
            // Hono API
            // ----------------------------------------------------------------------------------------------------------------------------
            
            // TEST RESPOMSE
            // const json = JSON.stringify({ message: 'お問い合わせを受け付けました。' });
            // const parsedJson = JSON.parse(json);
            
            // return await ctx.render({
            //   message: parsedJson.message,
            // });

            // 1. form.entries(): retrieve all entries (key/value pairs) of a form object.
            // 2. Object.fromEntries(form.entries()): converts the retrieved entries into objects.
            // 3. JSON.stringify(Object.fromEntries(form.entries())): converts the object into a string in JSON format.

            const json = JSON.stringify(Object.fromEntries(form.entries()));

            const headers = new Headers();
            const apikey = Deno.env.get('POST_API_KEY');
            const send_url = Deno.env.get('POST_API_URL');
        
            headers.set('X-API-KEY', apikey ?? '');
            headers.set('Content-Type', 'application/json');

            const response = await fetch(send_url ? send_url : '', {
                method: 'POST',
                headers,
                body: json,
            });

            let responseData:Props;

            try {
                responseData = await response.json();
                // console.log(responseData);

                return await ctx.render({ message: responseData.message, isSuccessful: responseData.isSuccessful });

            // deno-lint-ignore no-unused-vars
            } catch (error) {
                // console.error(error);
                // return new Response(error);
                return new Response(null, {'status': 403});
            }
            
        } else {
            // console.error('Error:', outcome['error-codes']);
            const json = JSON.stringify({ message: '認証に失敗しました。' });
            const parsedJson = JSON.parse(json);
            
            return await ctx.render({ message: parsedJson.message, isSuccessful: false });
        }
    }  
};

export default function ContactForm(props: PageProps<Props>) {
    const { message } = props.data;
    const { isSuccessful } = props.data;
    const sitekey = Deno.env.get('RECAPTCHA_SITE_KEY');

    return (
        <>
            <form method='POST' class='flex flex-col bg-slate-100 mt-8 mb-8 py-6 px-8 max-w-[760px] h-auto mx-auto rounded drop-shadow'>
                <h2 class='text-2xl mb-4 text-center font-bold'>お問い合わせフォーム</h2>
                <label class='mb-2' for='email'>メールアドレス</label>
                <input class='mb-4 p-2' type='email' id='email' name='email' />
                <label class='mb-2' for='message'>お問い合わせ内容</label>
                <textarea class='resize-none mb-4 p-2'  rows={15} id='message' name='message'></textarea>
                <div class='checkbox mb-3 text-center'>
                    {/* <!-- The following line controls and configures the Turnstile widget. --> */}
                    <div class='cf-turnstile' data-sitekey={sitekey} data-theme='light'></div>
                    {/* <!-- end. --> */}
                </div>
                {/* Set to 'disable' until CloudFlare Turnstile resolves */}
                <button disabled={isSuccessful} type='submit' class={'text-center w-[300px] mx-auto px-2 py-2 border-gray-400 border-2 rounded bg-white hover:bg-gray-200 transition-colors'}>送信</button>
                {message ? <p class={`text-center mt-4 ${isSuccessful ? 'text-blue-500' : 'text-red-500'}`}>{message}</p> : null}
            </form>  
        </>
    )
}