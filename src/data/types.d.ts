/**
 * Type definitions for src/data/weddingData.js.
 *
 * The site has no build step, so the data file itself is plain JavaScript;
 * these types give editors like VS Code autocomplete and error checking
 * (via the `// @ts-check` line at the top of weddingData.js).
 */

/** "YYYY-MM-DD", e.g. "2026-12-09" */
export type ISODate = string;
/** 24-hour "HH:MM", e.g. "19:00" */
export type Time24 = string;
/** Any CSS colour, e.g. "#1F2E4D" */
export type Color = string;

export interface FamilySide {
  parentsLabel: string;
  parents: string[];
  grandparentsLabel: string;
  /** Leave empty to hide the grandparents line. */
  grandparents: string[];
}

export interface WeddingEvent {
  name: string;
  shortName: string;
  date: ISODate;
  startTime: Time24;
  time: string;
  venue: string;
  dressCode: string;
  note: string;
  image: string;
  icon: string;
}

export interface StoryMilestone {
  title: string;
  subtitle: string;
}

export interface WeddingData {
  couple: {
    bride: string;
    groom: string;
    brideFullName: string;
    groomFullName: string;
    tagline: string;
  };
  wedding: {
    dates: ISODate[];
    city: string;
    state: string;
    /** UTC offset of the venue, e.g. "+05:30" */
    timezone: string;
  };
  venue: {
    name: string;
    address: string;
    mapsUrl: string;
    mapPin: { left: string; top: string };
  };
  family: {
    bride: FamilySide;
    groom: FamilySide;
  };
  events: WeddingEvent[];
  story: {
    milestones: StoryMilestone[];
    quote: string;
    photoCaption: string;
  };
  contact: {
    whatsapp: string;
    primary: { name: string; relation: string; phone: string };
    others: string[];
  };
  assets: {
    hero: string;
    envelope: string;
    seal: string;
    countdown: string;
    venueMap: string;
    rsvpBackground: string;
    /**
     * Six couple photos, in this order: story left, story middle, story right,
     * scratch-card photo, blessings cut-out, families background.
     */
    gallery: [string, string, string, string, string, string];
    storyBackground: string;
    banner: string;
    blessingsScene: string;
    blessingsElders: string;
  };
  music: {
    src: string;
    initialVolume: number;
    targetVolume: number;
    fadeDuration: number;
    loop: boolean;
  };
  theme: {
    primary: Color;
    accent: Color;
    accentDark: Color;
    accentSoft: Color;
    gold: Color;
    goldLight: Color;
  };
  sections: {
    scratchCard: boolean;
    countdown: boolean;
    family: boolean;
    story: boolean;
    banner: boolean;
    events: boolean;
    venue: boolean;
    blessings: boolean;
    rsvp: boolean;
  };
  animations: {
    fallingPetals: boolean;
    parallax: boolean;
    revealOnScroll: boolean;
  };
}

declare global {
  interface Window {
    weddingData: WeddingData;
  }
}
