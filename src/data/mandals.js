import { demoMandal, demoMandal2 } from './demoMandal';

/**
 * Mandal Registry — maps slugs to Mandal data.
 * In production, this would be replaced by an API call.
 * @type {Record<string, import('../types/mandal.js').Mandal>}
 */
const mandals = {
  [demoMandal.identity.slug]: demoMandal,
  [demoMandal2.identity.slug]: demoMandal2,
};

/**
 * Look up a Mandal by its URL slug.
 * @param {string} slug
 * @returns {import('../types/mandal.js').Mandal | null}
 */
export function getMandal(slug) {
  return mandals[slug] || null;
}

/**
 * Get all available Mandal slugs (for listing/index).
 * @returns {string[]}
 */
export function getAllMandals() {
  return Object.values(mandals).map(m => ({
    slug: m.identity.slug,
    name: m.identity.name,
    nameMarathi: m.identity.nameMarathi,
    city: m.location.city,
  }));
}
