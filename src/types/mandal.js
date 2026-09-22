/**
 * E-PavtiBook — Mandal Type Definitions (JSDoc)
 *
 * These types define the data shape for Mandal pages.
 * When a backend is added, the API should return data matching these shapes.
 */

/**
 * @typedef {Object} MandalIdentity
 * @property {string} name - English name
 * @property {string} nameMarathi - Marathi/Devanagari name
 * @property {string} slug - URL slug
 * @property {string} tagline - Short English tagline
 * @property {string} [taglineMarathi] - Marathi tagline
 * @property {number} [established] - Year established
 * @property {string} [communitySize] - e.g. "200+ Families"
 * @property {string} [description] - Long English description
 * @property {string} [descriptionMarathi] - Long Marathi description
 * @property {string} [logoUrl] - Logo image URL
 * @property {string} [heroImageUrl] - Hero background image
 * @property {string} [aboutImageUrl] - About section image
 */

/**
 * @typedef {Object} Festival
 * @property {string} name - e.g. "Navratri 2026"
 * @property {string} nameMarathi - e.g. "नवरात्री २०२६"
 * @property {string} startDate - ISO date string (YYYY-MM-DD)
 * @property {string} endDate - ISO date string (YYYY-MM-DD)
 * @property {string} [dussehraDate] - ISO date string
 * @property {string} year - e.g. "2026"
 */

/**
 * @typedef {Object} ScheduleEvent
 * @property {string} title - English event title
 * @property {string} titleMarathi - Marathi event title
 * @property {string} time - Time string, e.g. "07:00 AM"
 * @property {string} [endTime] - End time
 * @property {string} venue - Venue name
 * @property {string} [description] - Event description
 * @property {string} [eventType] - e.g. "Aarti", "Cultural", "Pooja"
 */

/**
 * @typedef {Object} ScheduleDay
 * @property {number} day - Day number (1-9)
 * @property {string} date - ISO date string (YYYY-MM-DD)
 * @property {string} goddess - English goddess name
 * @property {string} goddessMarathi - Devanagari goddess name
 * @property {string} color - Day color (for visual accent)
 * @property {string} colorHex - Hex color code for the day
 * @property {ScheduleEvent[]} events - Events for this day
 */

/**
 * @typedef {Object} Sponsor
 * @property {string} id - Unique identifier
 * @property {string} name - Sponsor/business name
 * @property {string} tier - "gold" | "silver" | "community" | "festival" | "supporter"
 * @property {string} [description] - Short description
 * @property {string} [logoUrl] - Logo image URL
 * @property {string} [initials] - Fallback initials (2 chars)
 */

/**
 * @typedef {Object} GalleryImage
 * @property {string} id - Unique identifier
 * @property {string} src - Image source URL
 * @property {string} alt - Alt text
 * @property {string} [caption] - Display caption
 * @property {boolean} [featured] - If true, displayed larger
 */

/**
 * @typedef {Object} MandallLocation
 * @property {string} venue - Venue name
 * @property {string} address - Full address
 * @property {string} [landmark] - Nearby landmark
 * @property {string} [city] - City
 * @property {string} [state] - State
 * @property {string} [mapsUrl] - Google Maps URL
 * @property {number} [lat] - Latitude
 * @property {number} [lng] - Longitude
 */

/**
 * @typedef {Object} Contact
 * @property {string} [phone] - Phone number
 * @property {string} [email] - Email address
 * @property {string} [whatsapp] - WhatsApp number
 */

/**
 * @typedef {Object} Social
 * @property {string} [facebook] - Facebook URL
 * @property {string} [instagram] - Instagram URL
 * @property {string} [youtube] - YouTube URL
 * @property {string} [twitter] - Twitter/X URL
 */

/**
 * @typedef {Object} Mandal
 * @property {MandalIdentity} identity
 * @property {Festival} festival
 * @property {ScheduleDay[]} schedule
 * @property {Sponsor[]} sponsors
 * @property {GalleryImage[]} gallery
 * @property {MandallLocation} location
 * @property {Contact} [contact]
 * @property {Social} [social]
 */

export default {};
