import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', async (c) => {
  // awaitを使う理由はこちらに記載あり
  // https://developers.cloudflare.com/workers/runtime-apis/rpc#all-calls-are-asynchronous
  const r = await c.env.MY_WORKER.hello()
  // const r = await c.env.MY_WORKER_BINDING.hello()

  return c.render(r)
})

export default app
