# newworld.codes

The New World Code Ltd website: the company, its products, the founder, and
the privacy policy, terms and support pages that App Store listings link to.

Next.js static export with Tailwind 4, served from Cloudflare Workers static
assets. It uses the same stack and design tokens as melodist.studio.

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in out/
npm run deploy   # build and wrangler deploy
```

## Adding or updating a product

Everything product-related comes from `app/products.ts`: the homepage rows,
nav, footer, product pages, sitemap, `llms.txt` and the JSON-LD.

- A product **with its own website** (`website` set) is listed and linked out.
- A product **without one** gets a page at `/<slug>`, with an OG image,
  structured data and FAQ.
- When an App Store listing goes live, set `appStoreId` (and `status: "live"`).
  That turns on the store badge and Safari's Smart App Banner.
- Add a section to `app/privacy/page.tsx` for any new app before release.
- Bump the `lastModified` dates in `app/sitemap.ts` when a page changes.

## App Store Connect URLs

- Support URL: https://newworld.codes/support
- Marketing URL: https://newworld.codes/<slug>
- Privacy Policy URL: https://newworld.codes/privacy
