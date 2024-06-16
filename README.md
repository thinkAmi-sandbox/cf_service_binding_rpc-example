# cf_service_binding_of_pages_and_workers-example
## Tested Environment

- Windows 11 WSL2
- Wrangler 3.60.3
- Bun 1.1.13
- Cloudflare Workers
  - C3 で生成
- Cloudflare Pages
  - Hono 4.4.6
- 開発向けツール
  - concurrently 8.2.2
    - ローカルで、PagesとWorkersを同時に起動するため
  - Biome 1.8.1
    - Linter & Formatter

## Related Blog (Written in Japanese)

- [CloudflareのService Bindings RPC を使って、Bun + Hono な Pages と Workers を連携してみた - メモ的な思考的な](https://thinkami.hatenablog.com/entry/2024/06/16/210633)