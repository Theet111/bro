# Commonstage

Commonstage is a minimalist concept website that connects event planners with creative talent. It includes an artist directory, individual profiles, a booking request flow, an artist signup flow, and browser-local saved lists. All initial artists are fictional sample data.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To verify a production build, run `npm run build`.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home, featured artists, categories, and overview |
| `/artists` | Search, filter, and sort the artist directory |
| `/artists/[id]` | Artist profile, specialties, and pricing |
| `/booking/[id]` | Event booking request form |
| `/saved` | Saved artist shortlist |
| `/requests` | Booking requests saved in this browser |
| `/for-artists` | Information for artists |
| `/join` | Create a sample artist profile |
| `/how-it-works` | Planner flow and demo FAQs |

## Demo behavior

- Six illustrative artist profiles are hardcoded in `lib/artists.ts`.
- Search, category, city, and price sorting work in the directory.
- Favorites, newly created artist profiles, and booking requests are stored in browser `localStorage`.
- Creating an artist profile opens its own profile page. Optional profile images use a URL supplied in the form; otherwise the profile shows initials.
- Booking requests appear under **My requests**. They are **not sent to artists**. The site has no accounts, backend, email delivery, or payments.
- Browser-local data does not sync across devices and can be cleared with browser data.

## Brand icon

The custom eight-point stage mark is in `app/icon.svg`. Next.js uses it as the site icon, and a matching inline mark appears in the header and footer. The visual system uses warm white, charcoal, and a single muted terracotta accent.

## Project structure

```text
app/             Pages, layout, global styles, and app icon
components/      Shared navigation, footer, cards, and icons
lib/artists.ts    Illustrative artist data and types
lib/demo-store.ts Browser-local demo persistence
```

Artist photography uses external Unsplash image URLs and requires an internet connection to appear. The site remains usable without those images.
