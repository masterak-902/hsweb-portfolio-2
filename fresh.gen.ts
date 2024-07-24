// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $dashboard_path_ from "./routes/dashboard/[...path].ts";
import * as $index from "./routes/index.tsx";
import * as $login from "./routes/login.tsx";
import * as $ContactForm from "./islands/ContactForm.tsx";
import * as $LoginForm from "./islands/LoginForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/dashboard/[...path].ts": $dashboard_path_,
    "./routes/index.tsx": $index,
    "./routes/login.tsx": $login,
  },
  islands: {
    "./islands/ContactForm.tsx": $ContactForm,
    "./islands/LoginForm.tsx": $LoginForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
