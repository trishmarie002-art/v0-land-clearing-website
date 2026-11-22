# Technical SEO, AEO & GEO Audit — 10 November 2026

Website: https://jayslandclearingserviceanddirtwork.com  
Repository: trishmarie002-art/v0-land-clearing-website  
Hosting: Vercel; Next.js static export

## Method and verification boundaries

Inspected the live homepage through a public web retrieval and the connected GitHub source and Vercel build status. Source inspections included home, 12 service pages, 60 location pages, blog pages, 72-question directory, metadata, structured data, forms, tracking, footer, robots and sitemap. A public URL fetch of several inner pages, robots.txt, and sitemap.xml failed in the web retrieval tool; therefore their live HTTP response codes and rendered HTML were **not independently verified**. The GitHub source and Vercel's successful production/preview builds were examined instead. No Google Search Console site metrics, field Core Web Vitals, or laboratory Lighthouse/PageSpeed measurements were accessible.

## Confirmed strengths

- 60 city pages, 80 blog posts, 12 service pages, and 5 index/entry pages = 157 static, canonical URLs.
- Checked-in XML sitemap was reconciled against route definitions: 157 matching URLs, no duplicates and no omissions.
- Public robots.txt allows crawling and declares sitemap path.
- Existing service pages expose substantial text answers, canonical metadata, and visible local links.
- Actual contact funnel uses call, text, and Web3Forms quote forms; Google Tag Manager, Microsoft Clarity and Vercel Analytics are included in the layout.
- Header and footer make service and location navigation crawlable.

## Implemented changes in this PR

1. **Entity consistency:** Homepage LocalBusiness structured data now has stable `/#business` identifier. City pages use Service structured data referencing that single business rather than defining distinct businesses per city. The 12 individual service pages and 80 blog article templates reference the canonical business ID.
2. **Service data quality:** Homepage service offer catalog is populated from the real 12-page service data and includes the destination URLs; list cannot silently drift from page definitions.
3. **Home canonical:** Explicit homepage canonical metadata.
4. **SEO hygiene:** Removed geo-position meta tags that misleadingly appeared to pinpoint an exact business office in downtown San Antonio.
5. **FAQ accessibility and reliability:** Replaced JS accordion with native HTML details/summary content, removed non-beneficial FAQ rich-result markup, corrected unsupported absolute timeline and haul-everything statements, and linked to the full 72-answer directory.
6. **Navigation quality:** Repaired the footer's services index link and removed the two dead `href="#"` legal placeholders. Their absence is *not* a substitute for real reviewed legal pages.
7. **Geographic accuracy:** Service-area map now explicitly describes San Antonio as a reference point and the 50-mile circle as a guide, not a physical business address or absolute coverage guarantee.
8. **Topical linking:** Blog posts now link to closely related existing services; services link back to relevant real blog articles.
9. **Sitemap regression prevention:** A Node script validates the checked-in 157-entry XML against all locations, blog and service slugs each time `pnpm run build` executes. Builds fail if the sitemap is stale, missing a page, contains unrelated entries, or has duplicates.

## Findings still requiring action and verification

**High priority**
- Verify claims such as "over 15 years," "one of the most trusted," six published testimonial quotes, and photography before using them as authority signals. Do not invent reviews, job locations or years.
- Publish a privacy notice and any needed terms after reviewing actual data collection, third-party analytics, Web3Forms routing, data retention and contact practices. Current site collects visitor information but does not have published working legal policies.
- Obtain Google Search Console and Bing Webmaster Tools property access to review index coverage, page-level performance, AI visibility reports, crawl issues and sitemap fetch status.
- Verify Google Business Profile business name, service-area designation, address exposure, hours, categories and any licenses/insurance claims against real records.
- Request permission to use actual project photos and detailed case studies. City pages should be differentiated with verified local experience, not boilerplate.
- Verify actual service availability in all listed towns, especially those outside the map's reference circle.

**Medium priority**
- Run mobile and desktop Lighthouse / PageSpeed and field Core Web Vitals tests with real access. Hero uses third-party large background imagery and Next config disables image optimization; performance impact has not been measured.
- Evaluate sitewide quote popup: it opens immediately once per session, blocks scroll and may hurt mobile experience. A controlled conversion test is preferable to changing it without customer evidence.
- Verify GTM conversion tags actually receive `lead_call_click`, `lead_sms_click`, `lead_form_submit_success` and `lead_form_submit_error` and count only genuine inquiries.
- Test live HTTP 200 status, robots, x-robots headers, rendered canonical, redirects (www/non-www), SEO schema and social sharing preview for home, question hub, random blog and location, service detail, and sitemap.
- Review 80 blog pages and 60 local pages for duplicate or thin content before writing more. No mass pruning without Search Console data.

## What NOT to add simply for AEO/GEO

- No `llms.txt`, fake review schema, guaranteed AI placements, fictional case studies, or mass-produced location/service combinations.
- Google states normal SEO practices, crawlable meaningful content, original expertise and accurate structured data remain the fundamentals.

References:
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/essentials

## Deployment validation

Required before merge: preview deployment READY, sitemap validation passed, no TypeScript/build errors. After merge: production deployment READY and correctly assigned to the business domain. An independent browser/field test remains outstanding until access is available.
