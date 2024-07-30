// Fetch POST method in Deno
// GET .env POST_API_KEY

import { Handlers } from '$fresh/server.ts';

export const handler: Handlers = {

    // 1. Define POST action from contact form
    // 2. Form data acquisition from post data.
    // 3. Processing acquired data into json format.
    // 4. Create a header and define the following
    //    -> X-API-KEY
    // 5. Execute fetch to Hono API(/sender)

    async POST(req: Request) {
    
        const form = await req.formData();

        // Turnstile injects a token in "cf-turnstile-response".
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
        let responseData;
        if (outcome.success) {
            // 1. form.entries(): retrieve all entries (key/value pairs) of a form object.
            // 2. Object.fromEntries(form.entries()): converts the retrieved entries into objects.
            // 3. JSON.stringify(Object.fromEntries(form.entries())): converts the object into a string in JSON format.
            const json = JSON.stringify(Object.fromEntries(form.entries()));

            const headers = new Headers();
            const apikey = Deno.env.get('POST_API_KEY');
        
            headers.set('X-API-KEY', apikey ?? '');
            headers.set('Content-Type', 'application/json');

            // Hono API(/sender)へfetchの実行
            const response = await fetch('http://localhost:8787/sender', {
                method: 'POST',
                headers,
                body: json,
            });
            
            try {
                responseData = await response.json();
                console.log(responseData);
                return new Response(JSON.stringify(responseData), {
                    headers: { 'Content-Type': 'application/json' },
                });
                // return new Response(null, {});

            // deno-lint-ignore no-unused-vars
            } catch (error) {
                // console.error(error);
                // return new Response(error);
                return new Response(null, {'status': 403});
            }
        } else {
            console.error('Error:', outcome['error-codes']);
            // responseData = { isSuccessful: false,  message: 'トークンの有効期限が切れているまたは、認証に失敗しました。'};
            // return new Response(JSON.stringify(responseData), {
            //     headers: { 'Content-Type': 'application/json' },
            // });
            return new Response(null, {});
        }

    }  
}

