import { Handler } from "$fresh/server.ts";
import { Hono } from "$hono/mod.ts";

// /api/以下へのリクエストは全てこのファイルで受け取る

const app = new Hono().basePath("/dashboard");

// ルーティングの設定
const route = app
  .get("/status", (c) => c.json({ status: "ok" }))
  .get("/hello", (c) => c.json({ hello: "world" }));

export const handler: Handler = (req) => app.fetch(req);
export type AppType = typeof route; // rpcモードを使用するときはこのAppTypeをexportする