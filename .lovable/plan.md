# JobVerse — Plan

A modern, responsive, frontend-only marketing + product site for an AI job portal. All data will be mock/static (arrays in `src/data/`) so the layouts translate cleanly to WordPress/Elementor later. No backend, auth, or DB in this pass.

## Design System (src/styles.css)

Tokens registered in `@theme inline` (all colors converted to `oklch`):
- `--primary` #2563EB, `--secondary` #0F172A, `--accent` #38BDF8
- `--background` #F8FAFC, `--foreground` #0F172A
- `--success` #10B981, `--warning` #F59E0B, `--destructive` #EF4444
- Radius base `1rem` (16px) → `rounded-lg` = 16px, `rounded-xl` = 20px
- Shadows: `--shadow-soft`, `--shadow-card`, `--shadow-glass`
- Gradients: `--gradient-primary` (primary → accent), `--gradient-hero`
- Glass utility: `.glass` (backdrop-blur + translucent bg + border)

Fonts loaded via `<link>` in `src/routes/__root.tsx` head (Poppins 500/600/700, Inter 400/500/600). Register `--font-heading: "Poppins"`, `--font-sans: "Inter"` in `@theme`. Base body uses Inter; `h1–h6` get `font-heading`.

Container: `max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8`.

Buttons: extend shadcn `Button` with `pill` variant (rounded-full, gradient bg, soft shadow, hover lift).

Animations (already available): `animate-fade-in`, `hover-scale`. Add `animate-fade-up`, `animate-float`, and simple `IntersectionObserver`-based reveal hook `useReveal()`.

## Routes (src/routes/)

Flat file convention. Each route defines its own `head()` with unique title/description/og.

- `index.tsx` — Home (all 15 sections)
- `browse-jobs.tsx` — Job listing grid + filters (mock)
- `remote-jobs.tsx`, `government-jobs.tsx`, `it-jobs.tsx`, `healthcare-jobs.tsx`, `engineering-jobs.tsx`, `internships.tsx`, `freelance-jobs.tsx` — category listings reusing the same `JobList` component with a preset filter
- `companies.tsx` — Company grid
- `employers.tsx` — Employer landing + pricing cards
- `career-advice.tsx`, `salary-guide.tsx`, `blog.tsx` — resource pages
- `about.tsx`, `contact.tsx`
- `login.tsx`, `register.tsx` — static forms (no auth wiring)
- `dashboard.tsx` — mock candidate dashboard (saved jobs, applications, profile card)

## Shared Components (src/components/)

Layout: `SiteHeader` (sticky, glass on scroll), `SiteFooter`, `FloatingChatButton`, `Container`, `SectionHeading`, `Reveal`.

Cards & sections: `SearchBar`, `CategoryCard`, `JobCard` (with verified + urgent badges, bookmark, apply), `CompanyCard`, `RemoteJobCard`, `GovernmentJobCard`, `ResourceCard`, `TestimonialCard`, `StatCard` (with animated counter via `useCountUp`), `AppPromo`, `FaqAccordion` (shadcn Accordion), `NewsletterCta`, `BlogCard`, `PricingCard`.

Route-level building blocks for the home page live in `src/components/home/` (HeroSection, FeaturedCategories, FeaturedJobs, WhyChoose, PopularCompanies, RemoteJobsSection, GovernmentJobsSection, CareerResources, Testimonials, Statistics, MobileAppPromo, FAQ, Newsletter).

Root layout: move `<SiteHeader />` + `<Outlet />` + `<SiteFooter />` + `<FloatingChatButton />` into `RootComponent` in `__root.tsx` so every page shares chrome.

## Mock Data (src/data/)

`jobs.ts`, `companies.ts`, `categories.ts`, `testimonials.ts`, `faqs.ts`, `blogPosts.ts`, `stats.ts`. Category pages filter `jobs.ts` by tag.

## Responsiveness

Mobile-first with grid + `min-w-0` / `shrink-0` patterns for header rows. Header collapses into a Sheet drawer on `<md`. Job/category grids: 1 col mobile → 2 tablet → 3-4 desktop. Hero uses `grid-cols-1 lg:grid-cols-2` with illustration on the right.

## Hero Illustration

Generate one premium hero illustration (people at laptops searching jobs, blue/white palette) via `imagegen` → `src/assets/hero-jobverse.jpg`, imported as ES6.

## SEO / Head

- `__root.tsx`: sitewide defaults (viewport, charSet, og:type website, og:site_name "JobVerse", Organization JSON-LD). Remove template "Lovable App" defaults.
- Each route: distinct `title`, `description`, `og:title`, `og:description`, relative `og:url` + leaf-only `canonical`. Home also gets WebSite JSON-LD with SearchAction.
- Semantic HTML: single `<h1>` per page, `<header>`/`<main>`/`<footer>`/`<section>` with aria-labels, alt text on all imgs.

## Out of Scope (this pass)

Real auth, database, job posting flow, AI resume/matching backend, payment integration, search functionality (search bar is UI only), i18n. All are additive later once Lovable Cloud is enabled.

## Deliverable

Working preview showing every listed route, fully styled homepage with all 15 sections, and reusable component set ready for Elementor recreation.