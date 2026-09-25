// @ts-check
/**
 * ===========================================================================
 *  WEDDING DATA — the ONLY file you need to edit for a new client.
 * ===========================================================================
 *
 *  ⚠ DEMO CONTENT: every name, date, venue and phone number below is
 *  FICTIONAL. Replace all of it with the real client's details before
 *  sharing an invitation with guests.
 *
 *  New client checklist:
 *    1. Edit the text below (names, dates, venue, family, events, contacts).
 *    2. Replace the placeholder images in /images (see `assets` below) and
 *       the song in /audio. If a new file has a different name or type
 *       (e.g. hero.jpg instead of hero.svg), update its path here.
 *    3. Push to GitHub — the site redeploys automatically.
 *
 *  Rules for editing:
 *    - Only change the text between the quotes "like this".
 *    - Keep every comma, bracket and quote mark in place.
 *    - Dates are written as "YYYY-MM-DD" (e.g. "2027-02-18").
 *    - Times are written in 24-hour format "HH:MM" (e.g. "19:00" = 7 PM).
 *    - Set a section to `false` to hide it from the page.
 * ===========================================================================
 */

/** @type {import('./types').WeddingData} */
window.weddingData = {
  // ---------------------------------------------------------------- COUPLE
  couple: {
    bride: "Ananya",               // first name, shown across the page
    groom: "Arjun",
    brideFullName: "Ananya Sharma", // used in the page description (SEO)
    groomFullName: "Arjun Mehta",
    tagline: "Two hearts, one beautiful beginning."
  },

  // --------------------------------------------------------------- WEDDING
  wedding: {
    // The main wedding days, in order. Shown as "18th & 19th February 2027".
    dates: ["2027-02-18", "2027-02-19"],
    city: "Jaipur",
    state: "Rajasthan",
    // Time zone of the venue. India = "+05:30".
    timezone: "+05:30"
  },

  // ----------------------------------------------------------------- VENUE
  venue: {
    name: "The Raj Palace",
    address: "Amer Road, Jaipur, Rajasthan",
    // Placeholder link — paste the venue's real Google Maps share link here.
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Raj+Palace+Jaipur",
    // Where the pulsing pin sits on the venue map image (percent from left / top).
    mapPin: { left: "50%", top: "40%" }
  },

  // ---------------------------------------------------------------- FAMILY
  // Leave `grandparents` empty ([]) to hide that line.
  family: {
    bride: {
      parentsLabel: "Daughter of",
      parents: ["Mr. Rajesh Sharma", "Mrs. Meena Sharma"],
      grandparentsLabel: "Granddaughter of",
      grandparents: []
    },
    groom: {
      parentsLabel: "Son of",
      parents: ["Mr. Sanjay Mehta", "Mrs. Kavita Mehta"],
      grandparentsLabel: "Grandson of",
      grandparents: []
    }
  },

  // ---------------------------------------------------------------- EVENTS
  // The countdown timer counts down to the FIRST event.
  // Add or remove events freely; the layout alternates left/right automatically.
  events: [
    {
      name: "Haldi",
      shortName: "Haldi",                  // used in the small venue strip
      date: "2027-02-17",
      startTime: "11:00",                  // for the countdown + calendar file
      time: "11:00 AM onwards",            // shown on the page
      venue: "The Raj Palace, Jaipur",
      dressCode: "Shades of yellow",
      note: "A splash of yellow, a pinch of joy, endless smiles.",
      image: "media/ev-haldi.jpg",
      icon: "media/ic-haldi.jpg"
    },
    {
      name: "Sangeet",
      shortName: "Sangeet",
      date: "2027-02-17",
      startTime: "19:00",
      time: "7:00 PM onwards",
      venue: "The Raj Palace, Jaipur",
      dressCode: "Festive & glamorous",
      note: "An evening of music, dance and celebration.",
      image: "media/ev-sangeet.jpg",
      icon: "media/ic-sangeet.jpg"
    },
    {
      name: "Wedding Ceremony",
      shortName: "Wedding",
      date: "2027-02-18",
      startTime: "10:00",
      time: "10:00 AM onwards",
      venue: "The Raj Palace, Jaipur",
      dressCode: "Traditional",
      note: "The pheras — seven steps, one lifetime.",
      image: "media/ev-pheras.jpg",
      icon: "media/ic-wedding.jpg"
    },
    {
      name: "Reception",
      shortName: "Reception",
      date: "2027-02-19",
      startTime: "19:00",
      time: "7:00 PM onwards",
      venue: "The Raj Palace, Jaipur",
      dressCode: "Formal / festive",
      note: "Celebrating the newlyweds — come and bless us with your presence.",
      image: "media/ev-reception.jpg",
      icon: "media/ic-reception.jpg"
    }
  ],

  // ----------------------------------------------------------------- STORY
  story: {
    // Timeline on the right of "Our story". Numbers (01, 02…) are added automatically.
    milestones: [
      { title: "Two paths", subtitle: "Two different journeys" },
      { title: "One meeting", subtitle: "Where it all began" },
      { title: "A promise", subtitle: "To walk together" },
      { title: "Wedding Ceremony", subtitle: "18 February 2027 · Jaipur" }
    ],
    quote: "Two hearts, one beautiful beginning — and a lifetime of stories still to write.",
    // Caption under the right-hand photo (the left one shows the couple's names).
    photoCaption: "Together, always ♡"
  },

  // --------------------------------------------------------------- CONTACT
  // ⚠ DEMO NUMBERS ONLY — not real contacts. Replace for a real client.
  contact: {
    // Number that opens WhatsApp from the "Joyfully accept" RSVP button.
    whatsapp: "+91 90000 12345",
    // Main contact shown with a name.
    primary: {
      name: "Mr. Rajesh Sharma",
      relation: "Bride's family · demo number",
      phone: "+91 90000 12345"
    },
    // Extra numbers shown below the main contact (groom's family).
    others: ["+91 90000 67890"]
  },

  // ---------------------------------------------------------------- IMAGES
  // Every file below is a PLACEHOLDER. Drop the real image into the same
  // folder and update the path (e.g. "images/couple/hero.jpg").
  assets: {
    hero: "images/couple/hero.svg",                       // hero artwork: names, dates, city
    envelope: "images/illustrations/envelope.svg",        // opening envelope (seal sits in the centre)
    seal: "images/illustrations/seal.svg",                // round wax seal / monogram
    countdown: "images/illustrations/countdown.svg",      // countdown backdrop (4 digit frames)
    venueMap: "images/illustrations/venue-map.svg",       // illustrated venue map
    rsvpBackground: "images/illustrations/rsvp-background.svg",

    // Couple photos. Each one fills an existing spot on the page:
    gallery: [
      "images/gallery/gallery-01.svg", // Our Story — left photo (landscape 4:3)
      "images/gallery/gallery-02.svg", // Our Story — middle arch photo (portrait 3:4)
      "images/gallery/gallery-03.svg", // Our Story — right photo (portrait 3:4)
      "images/gallery/gallery-04.svg", // Photo revealed under the scratch card (portrait)
      "images/gallery/gallery-05.svg", // Couple cut-out in Blessings (transparent PNG works best)
      "images/gallery/gallery-06.svg"  // Families section background (wide)
    ],

    // Design artwork (no client details — reuse as-is).
    storyBackground: "media/story-ghat.png",
    banner: "media/band-clean.png",
    blessingsScene: "media/bless2-clean.png",
    blessingsElders: "media/bless2-elders.png"
  },

  // ----------------------------------------------------------------- MUSIC
  music: {
    src: "/audio/wedding-instrumental.mp3",
    initialVolume: 0,
    targetVolume: 0.6,   // 0 = silent, 1 = full volume
    fadeDuration: 4000,  // milliseconds to fade in after the seal is clicked
    loop: true
  },

  // ----------------------------------------------------------------- THEME
  // Main text/accent colours. Petal and sparkle colours are part of the design.
  theme: {
    primary: "#1F2E4D",     // navy — headings, buttons, music button
    accent: "#8A1F2B",      // deep red — bride's name, main headings
    accentDark: "#6E1A26",  // darker red — names on the scratch card, RSVP
    accentSoft: "#8A2E2E",  // softer red — labels, event names
    gold: "#B8955A",        // gold — ornaments
    goldLight: "#C9A96A"    // light gold — lines and borders
  },

  // -------------------------------------------------------------- SECTIONS
  // Set to false to hide a section. The envelope and hero are always shown.
  sections: {
    scratchCard: true,
    countdown: true,
    family: true,
    story: true,
    banner: true,
    events: true,
    venue: true,
    blessings: true,
    rsvp: true
  },

  // ------------------------------------------------------------ ANIMATIONS
  animations: {
    fallingPetals: true,   // petals drifting across the page
    parallax: true,        // images gently follow the mouse (desktop only)
    revealOnScroll: true   // content fades up as you scroll
  }
};
