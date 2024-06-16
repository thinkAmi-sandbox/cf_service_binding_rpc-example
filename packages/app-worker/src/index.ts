/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { WorkerEntrypoint } from 'cloudflare:workers'

export class MyWorkerEntrypoint extends WorkerEntrypoint {
  async hello() {
    // biome-ignore lint: debug
    console.log('called worker!')
    return 'Hello my named export worker!'
  }
}

export default {
  async fetch() {
    return new Response('Hello Worker World!')
  },
}
