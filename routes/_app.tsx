import { type PageProps } from '$fresh/server.ts';

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>hsweb-portfolio-2</title>
        <link rel='stylesheet' href='/styles.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css' integrity='sha512-siwe/oXMhSjGCwLn+scraPOWrJxHlUgMBMZXdPe2Tnk3I0x3ESCoLz7WZ5NTH6SZrywMY+PB1cjyqJ5jAluCOg==' crossorigin='anonymous' referrerpolicy='no-referrer' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.9.1/font/bootstrap-icons.min.css' integrity='sha512-5PV92qsds/16vyYIJo3T/As4m2d8b6oWYfoqV+vtizRB6KhF1F9kYzWzQmsO6T3z3QG2Xdhrx7FQ+5R1LiQdUA==' crossorigin='anonymous' referrerpolicy='no-referrer' />
        <script src='https://challenges.cloudflare.com/turnstile/v0/api.js' defer></script>
      </head>
      <body>
          <div class='px-4 py-8 mx-auto bg-[#86efac]'>
            <div class='max-w-screen-md mx-auto flex flex-col items-center justify-center'>
              <h1 class='text-4xl tracking-wider font-bold'>This contact page is not yet active. (2024/07/31)</h1>
              <p class='my-4'>If you have any requests, please mention them in the form below.</p>
            </div>
          </div>
          <Component />
      </body>
    </html>
  );
}
