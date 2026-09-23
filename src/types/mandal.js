/**
 * E-PavtiBook — Mandal Type Definitions (JSDoc)
 *
 * These types define the data shape for Mandal pages with genuine multilingual support.
 * Supports Marathi (mr), Hindi (hi), and English (en).
 */

/**
 * @typedef {Object} MandalIdentity
 * @property {string | import('./language.js').LocalizedText} name - Mandal name (multilingual or string)
 * @property {string} [nameMarathi] - Legacy fallback for Marathi name
 * @property {string} slug - URL slug
 * @property {string | import('./language.js').LocalizedText} tagline - Tagline (multilingual or string)
 * @property {string} [taglineMarathi] - Legacy fallback for Marathi tagline
 * @property {number} [established] - Year established
 * @property {string | import('./language.js').LocalizedText} [communitySize] - e.g. "250+ Families"
 * @property {string | import('./language.js').LocalizedText} [description] - Description (multilingual or string)
 * @property {string} [descriptionMarathi] - Legacy fallback for Marathi description
 * @property {string} [logoUrl] - Logo image URL
 * @property {string} [heroImageUrl] - Hero background image
 * @property {string} [aboutImageUrl] - About section image
 */

/**
 * @typedef {Object} Festival
 * @property {string | import('./language.js').LocalizedText} name - e.g. "Navratri 2026"
 * @property {string} [nameMarathi] - Legacy fallback for Marathi festival name
 * @property {string} startDate - ISO date string (YYYY-MM-DD)
 * @property {string} endDate - ISO date string (YYYY-MM-DD)
 * @property {string} [dussehraDate] - ISO date string
 * @property {string} year - e.g. "2026"
 */

/**
 * @typedef {Object} ScheduleEvent
 * @property {string | import('./language.js').LocalizedText} title - Event title (multilingual or string)
 * @property {string} [titleMarathi] - Legacy fallback for Marathi title
 * @property {string} time - Time string, e.g. "07:00 AM"
 * @property {string} [endTime] - End time
 * @property {string | import('./language.js').LocalizedText} [venue] - Venue name
 * @property {string | import('./language.js').LocalizedText} [description] - Event description
 * @property {string} [eventType] - e.g. "Aarti", "Cultural", "Pooja"
 */

/**
 * @typedef {Object} ScheduleDay
 * @property {number} day - Day number (1-9)
 * @property {string} date - ISO date string (YYYY-MM-DD)
 * @property {string | import('./language.js').LocalizedText} goddess - Goddess name (multilingual or string)
 * @property {string} [goddessMarathi] - Legacy fallback for Marathi goddess name
 * @property {string} color - Day color (for visual accent)
 * @property {string} colorHex - Hex color code for the day
 * @property {ScheduleEvent[]} events - Events for this day
 */

/**
 * @typedef {Object} Sponsor
 * @property {string} id - Unique identifier
 * @property {string | import('./language.js').LocalizedText} name - Sponsor/business name
 * @property {string} tier - "gold" | "silver" | "community" | "festival" | "supporter"
 * @property {string | import('./language.js').LocalizedText} [description] - Short description
 * @property {string} [logoUrl] - Logo image URL
 * @property {string} [initials] - Fallback initials (2 chars)
 */

/**
 * @typedef {Object} GalleryImage
 * @property {string} id - Unique identifier
 * @property {string} src - Image source URL
 * @property {string | import('./language.js').LocalizedText} alt - Alt text
 * @property {string | import('./language.js').LocalizedText} [caption] - Display caption
 * @property {boolean} [featured] - If true, displayed larger
 */

/**
 * @typedef {Object} MandallLocation
 * @property {string | import('./language.js').LocalizedText} venue - Venue name
 * @property {string | import('./language.js').LocalizedText} address - Full address
 * @property {string | import('./language.js').LocalizedText} [landmark] - Nearby landmark
 * @property {string | import('./language.js').LocalizedText} [city] - City
 * @property {string | import('./language.js').LocalizedText} [state] - State
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
