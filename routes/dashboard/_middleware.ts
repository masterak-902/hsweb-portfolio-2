
// // https://fresh.deno.dev/docs/concepts/middleware
// // A middleware is defined in a _middleware.ts file. It will intercept the request in order for you to perform custom logic before or after the route handler.
// // This allows modifying or checking requests and responses. Common use-cases for this are logging, authentication, and performance monitoring.

// // Each middleware gets passed a next function in the context argument that is used to trigger child handlers.
// // The ctx also has a state property that can be used to pass arbitrary data to downstream (or upstream) handlers.
// // This state is included in PageProps by default, which is available to both the special _app wrapper and normal routes.
// // ctx.state is normally set by modifying its properties, e.g. ctx.state.loggedIn = true, but you can also replace the entire object like ctx.state = { loggedIn: true }.

// // This middle layer provides login authentication and token management.

// // import type { Handlers } from '$fresh/server.ts';
// // import { getCookies } from '$std/http/cookie.ts';

// // interface Data {
// //     isAllowed: boolean;
// //   }
// //   Add <Login> and logout to index
// // export const handler: Handlers<Data> = {
// //     GET(req, ctx) {
// //         const cookies = getCookies(req.headers);
// //         return ctx.render!({ isAllowed: cookies.auth === 'bar' });
// //     },
// // };
// // export default function Home({ data }: PageProps<Data>) {
// //     return (
// //         <div class='flex flex-col p-8'>
// //             {data.isAllowed ? 'Here is some secret' : 'You are not allowed here'}
// //             <a href='/logout'>Logout</a>
// //         </div>
// //     );
// // }

// //   Handle non-logged-in users
// // export const handler: Handlers = {
// //     GET(req, ctx) {
// //       const cookies = getCookies(req.headers);
// //       if (cookies.auth === 'bar') {
// //         return ctx.render!();
// //       } else {
// //         const url = new URL(req.url);
// //         url.pathname = '/login';
// //         return Response.redirect(url);
// //       }
// //     },
// //   };

// import { Handlers } from '$fresh/server.ts';

// export const handler: Handlers = {
//     async POST(req: Request) {
//         // Processing of connections to APIs
//         //  Fetch method: post
//         // https://docs.deno.com/runtime/tutorials/fetch_data/

//         // 1. Post action from the login page.
//         // 2. Get the form data.
//         //    -> username, password
//         // 3. Create a new Headers object.
//         //    -> headers(Authorization: basicAuth)
//         // 4. Execute await fetch(*url*/api/login) with try-catch
//         //    -> OK: return json(JWT token)
//         //    -> NG: return HTTPException -> redirect to login_error
//         // 5. Set the JWT token in session storage.
//         // 5_TEST. To validate the set token, send a GET request to the (*url*/api/access), receive a message and output it to the console log.
//         //         -> OK: 'You are authorized.' -> console.log('You are authorized.')
//         // 6. Redirect to the dashboard page.

//         // Examples of redirection processes
//         // headers.set('location', '/***');
//         //     return new Response(null, {
//         //         status: 303,
//         //         headers,
//         //         });

//         // List of redirect destinations
//         // '/dashboard'
//         // '/login_error'

//         // Error code 303 indicates a redirect.
//         // Error code 401 indicates an authentication error.

//          // 2. Get the form data.
//         const form = await req.formData();

//         // 3. Create a new Headers object.
//         const headers = new Headers();
//         headers.set('Authorization', 'Basic ' + btoa(`${form.get('username')}:${form.get('password')}`));

//         // 4. Execute await fetch(*url*/api/login) with try-catch

//         const response = await fetch('http://localhost:8787/api/login', { method: 'GET', headers, });
//         if (response.ok) {
//             const token = await response.json();
//             sessionStorage.setItem('jwt', token);

//             // 5_TEST. To validate the set token, send a GET request to the (*url*/api/access), receive a message and output it to the console log.
//             const accessResponse = await fetch('http://localhost:8787/api/access', { method: 'GET', headers: { Authorization: `Bearer ${token}` } });
//             console.log(accessResponse.json());

//             return new Response(null, {
//                 status: 303,
//                 headers: new Headers({
//                     location: '/dashboard',
//                 }),
//             });
//         } else {
//             return new Response(null, {
//                 status: 303,
//                 headers: new Headers({
//                     location: '/login_error',
//                 }),
//             });
//         }
//     }
// };