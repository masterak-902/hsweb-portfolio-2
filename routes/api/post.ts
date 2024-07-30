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
        const json = JSON.stringify(Object.fromEntries(form.entries()));

        console.log(json);
        const headers = new Headers();
        const apikey = Deno.env.get('POST_API_KEY');
        console.log(apikey);
    
        headers.set('X-API-KEY', apikey ?? '');
        headers.set('Content-Type', 'application/json');

        // Hono API(/sender)へfetchの実行
        const response = await fetch('http://localhost:8787/sender', {
            method: 'POST',
            headers,
            body: json,
        });
        
        if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            return new Response(null, {});
        } else {
            const responseData = await response.json();
            console.log(responseData);
            return new Response(null, {});
        }
    }
}