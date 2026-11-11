/**
 * Stop publication if the checked-in sitemap does not match actual static pages.
 * Designed for Next's output: "export" configuration.
 */
import { readFileSync } from "node:fs"
import { resolve } from "node:path"

const root = process.cwd()
const site = "https://jayslandclearingserviceanddirtwork.com"
const content = (path) => readFileSync(resolve(root, path), "utf8")

function slugs(file) {
  const source = content(file)
  const matches = [...source.matchAll(/(?:^|\n)\s*(?:"slug"|slug):\s*"([^"]+)"/g)]
  if (!matches.length) throw new Error(`No slugs discovered in ${file}. Review the sitemap validator.`)
  return matches.map((match) => match[1])
}

const expected = [
  site,
  `${site}/blog`,
  `${site}/service-areas`,
  `${site}/services`,
  `${site}/questions`,
  `${site}/contact`,
  `${site}/about`,
  ...slugs("lib/locations.ts").map((slug) => `${site}/${slug}`),
  ...slugs("lib/blog-posts.ts").map((slug) => `${site}/blog/${slug}`),
  ...slugs("lib/service-pages.ts").map((slug) => `${site}/services/${slug}`),
]
const sitemap = content("public/sitemap.xml")
const found = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const missing = expected.filter((url) => !found.includes(url))
const extraneous = found.filter((url) => !expected.includes(url))
const duplicates = found.filter((url, index) => found.indexOf(url) !== index)
if (missing.length || extraneous.length || duplicates.length || found.length !== expected.length) {
  process.stderr.write("Sitemap is inconsistent with published page definitions.\n")
  if (missing.length) process.stderr.write(`Missing URLs:\n${missing.join("\n")}\n`)
  if (extraneous.length) process.stderr.write(`Unexpected URLs:\n${extraneous.join("\n")}\n`)
  if (duplicates.length) process.stderr.write(`Duplicate URLs:\n${duplicates.join("\n")}\n`)
  process.exitCode = 1
} else {
  process.stdout.write(`Sitemap validated: ${found.length} unique canonical URLs.\n`)
}
