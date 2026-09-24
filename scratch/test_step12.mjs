import { demoMandal, demoMandal2 } from '../src/data/demoMandal.js';
import { getSponsors, getSponsorBySlug } from '../src/data/mandals.js';
import { translations } from '../src/i18n/translations.js';

console.log('--- Testing Step 12: Sponsor Hub & Celebration Partners Experience ---');

// 1. Check demoMandal sponsors
console.log(`Checking demoMandal sponsors (count: ${demoMandal.sponsors.length})...`);
if (!demoMandal.sponsors || demoMandal.sponsors.length === 0) {
  throw new Error('demoMandal sponsors array is missing or empty');
}

const requiredKeys = ['id', 'slug', 'name', 'tier'];
demoMandal.sponsors.forEach((sp, idx) => {
  requiredKeys.forEach(k => {
    if (!sp[k]) throw new Error(`Sponsor #${idx} (${sp.id}) is missing required key "${k}"`);
  });
  if (typeof sp.slug !== 'string' || !sp.slug.match(/^[a-z0-9-]+$/)) {
    throw new Error(`Sponsor #${idx} (${sp.id}) has invalid slug: "${sp.slug}"`);
  }
  if (!sp.name.mr || !sp.name.hi || !sp.name.en) {
    throw new Error(`Sponsor #${idx} (${sp.id}) name missing mr/hi/en localizations`);
  }
  console.log(`  ✓ Sponsor [${sp.tier}]: ${sp.slug} (${sp.name.en})`);
});

// 2. Check Presenting Partner
const presenting = demoMandal.sponsors.find(s => s.tier === 'presenting');
if (!presenting) {
  throw new Error('Presenting Partner is missing from demoMandal.sponsors');
}
console.log(`✓ Presenting partner found: ${presenting.name.en} (${presenting.slug})`);

// 3. Check Sponsor of the Day
if (!demoMandal.sponsorOfTheDay) {
  throw new Error('sponsorOfTheDay is missing from demoMandal');
}
const sotdResolved = typeof demoMandal.sponsorOfTheDay === 'string'
  ? demoMandal.sponsors.find(s => s.id === demoMandal.sponsorOfTheDay)
  : demoMandal.sponsorOfTheDay;
if (!sotdResolved) {
  throw new Error(`sponsorOfTheDay "${demoMandal.sponsorOfTheDay}" could not be resolved`);
}
console.log(`✓ Sponsor of the Day resolved: ${sotdResolved.name.en}`);

// 4. Test helper functions from mandals.js
const fetchedSponsors = getSponsors('shri-durga-utsav-mandal');
if (fetchedSponsors.length !== demoMandal.sponsors.length) {
  throw new Error(`getSponsors returned ${fetchedSponsors.length} but expected ${demoMandal.sponsors.length}`);
}
console.log(`✓ getSponsors('shri-durga-utsav-mandal') returned ${fetchedSponsors.length} sponsors`);

const testSlug = 'sharma-trading-co';
const fetchedBySlug = getSponsorBySlug('shri-durga-utsav-mandal', testSlug);
if (!fetchedBySlug || fetchedBySlug.slug !== testSlug) {
  throw new Error(`getSponsorBySlug failed for "${testSlug}"`);
}
console.log(`✓ getSponsorBySlug found: ${fetchedBySlug.name.en}`);

// 5. Check translations
const checkKeys = [
  'celebrationPartners',
  'celebrationPartnersSubtitle',
  'platinumPartner',
  'viewPartner',
  'sharePartner',
  'festivalOfferAvailable',
  'todaysCelebrationPartner',
  'honoredPartner',
  'partnerTier',
  'supportingEvent',
  'specialOffer',
  'allPartners',
  'backToMandal',
];

['mr', 'hi', 'en'].forEach(lang => {
  const dict = translations[lang];
  if (!dict) throw new Error(`Missing translation dictionary for "${lang}"`);
  checkKeys.forEach(k => {
    if (!dict[k] || dict[k].trim() === '') {
      throw new Error(`Missing translation key "${k}" in language "${lang}"`);
    }
  });
  console.log(`✓ All required keys present in language "${lang}"`);
});

// 6. Check demoMandal2 sponsors
console.log(`Checking demoMandal2 sponsors (count: ${demoMandal2.sponsors?.length || 0})...`);
if (demoMandal2.sponsors) {
  demoMandal2.sponsors.forEach(sp => {
    if (!sp.slug) throw new Error(`demoMandal2 sponsor ${sp.id} is missing slug`);
  });
  console.log(`✓ demoMandal2 sponsors have valid slugs`);
}

console.log('--- ALL STEP 12 UNIT & DATA TESTS PASSED SUCCESSFULLY! ---');
