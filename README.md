# Nimantran — Wedding Invitation Demo Template

A reusable wedding invitation website, filled with **fictional demo content**
(Ananya & Arjun, The Raj Palace, Jaipur). Every name, date, venue and phone
number is made up, and every photo and illustration is a labelled placeholder.

**New client = edit `src/data/weddingData.js` + replace the images and music.**
You don't need to edit any markup or code.

## Make an invitation for a new client

1. Copy this repo, e.g. `gh repo create <client>-wedding --public --clone`,
   then copy the files in.
2. Edit **`src/data/weddingData.js`**. Every field has a comment explaining it.
3. Replace the placeholders in `images/` with the client's artwork and photos.
   If a new file has a different name or type (`hero.jpg` instead of
   `hero.svg`), update its path in `weddingData.assets`.
4. Optionally replace `audio/wedding-instrumental.mp3`.
5. Push to GitHub and import the repo at https://vercel.com/new
   (Framework: **Other**, no build command). Each client gets their own link.

## What's in `weddingData.js`

| Key | What it controls |
| --- | --- |
| `couple` | First names (shown everywhere), full names (page description), tagline |
| `wedding` | Main wedding dates (`YYYY-MM-DD`), city, state, time zone |
| `venue` | Venue name, address, Google Maps link, pin position on the map image |
| `family` | Parents (and optional grandparents) for each side, with their labels |
| `events` | Each event: name, date, start time, display time, venue, dress code, note, images. The countdown targets the first event; "Add to calendar" is built from this list |
| `story` | Timeline milestones, quote, photo caption |
| `contact` | WhatsApp RSVP number, main contact, extra numbers |
| `assets` | Hero, envelope, seal, countdown, venue map, RSVP background, the 6 `gallery` photos, design artwork |
| `music` | Track, volume, fade-in, loop |
| `theme` | Main text/accent colours (applied as CSS variables `--wd-*`) |
| `sections` | Show/hide each section (`true` / `false`) |
| `animations` | Falling petals, mouse parallax, reveal-on-scroll |

From these values the page also builds its title, description, image alt text,
the R|S-style monogram, the blessing messages and the `.ics` calendar file.

### Images

| File | Where it appears |
| --- | --- |
| `images/couple/hero.svg` | Hero artwork. Put the couple's names, dates and city in the design |
| `images/illustrations/envelope.svg` | Opening envelope. The seal sits in its centre |
| `images/illustrations/seal.svg` | Wax seal / monogram (clicked to open) |
| `images/illustrations/countdown.svg` | Countdown backdrop. Digits are placed at 36.9 / 45.7 / 54.4 / 63.1 % across, 58.9 % down |
| `images/illustrations/venue-map.svg` | Venue map. Set `venue.mapPin` to the venue's position on it |
| `images/illustrations/rsvp-background.svg` | RSVP background. Content sits in the centre |
| `images/gallery/gallery-01.svg` … `06.svg` | Couple photos: story left / middle / right, scratch-card photo, blessings cut-out (transparent PNG), families background |

`media/` holds design artwork with no client details (event scenes, icons,
banner, blessings scene, decorations). Reuse it as-is.

## How it works

- `index.html` is the page. It renders itself client-side using React,
  ReactDOM and Babel, which `support.js` loads from a CDN at runtime. There is
  no build step.
- `src/data/weddingData.js` holds all client content. `src/data/types.d.ts`
  describes its shape, so VS Code gives autocomplete and error checking. The
  data file is plain JavaScript because the browser loads it directly.
- `js/wedding-view.js` turns the data into formatted dates, links, alt text and
  calendar entries, and applies the theme colours. You don't need to edit it.
- `js/wedding-music-controller.js` handles the background music: it stays
  silent until the seal is clicked, fades in, loops, and keeps its position
  when paused. It shows a floating play/pause button and uses one shared
  audio instance.
- `vercel.json` sets long-lived caching for `/media/*` and `/support.js`.

## Notes

- **Demo phone numbers** (`+91 90000 …`) are fictional and labelled as demo
  on the page. Replace them before sending a real invitation.
- The **Maps link** is a search placeholder. Paste the venue's real share link.
- **Blessings** are stored in each visitor's own browser (`localStorage`), not
  shared between guests.
- **Link previews** (WhatsApp, social) read the raw HTML, so they show the
  generic title "Wedding Invitation". The couple's names appear once the page
  loads.
- Fonts (Italianno, Cormorant Garamond, EB Garamond, Jost) load from Google
  Fonts.
