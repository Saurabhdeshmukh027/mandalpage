import { demoMandal, demoMandal2 } from '../src/data/demoMandal.js';
import { translations } from '../src/i18n/translations.js';
import { toDevanagariNumerals } from '../src/utils/dateUtils.js';

console.log('--- TEST STEP 11: GALLERY & MANDAL MEMORIES ---');

let passed = true;

function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    passed = false;
  } else {
    console.log('PASS:', message);
  }
}

// 1. Verify demoMandal gallery data
assert(Array.isArray(demoMandal.gallery) && demoMandal.gallery.length === 6, 'demoMandal has 6 curated gallery items');

const featuredItems = demoMandal.gallery.filter(img => img.featured);
assert(featuredItems.length >= 1, 'At least 1 featured image exists');
assert(featuredItems[0].id === 'g-1', 'Featured image has id g-1');

// 2. Verify image fields and categories
const categories = new Set();
demoMandal.gallery.forEach((img, idx) => {
  assert(img.id && (img.src || img.image), `Image ${idx + 1} has id and src`);
  assert(img.alt && img.alt.mr && img.alt.hi && img.alt.en, `Image ${idx + 1} has multilingual alt text`);
  assert(img.caption && img.caption.mr && img.caption.hi && img.caption.en, `Image ${idx + 1} has multilingual caption`);
  assert(typeof img.year === 'number', `Image ${idx + 1} has numeric year: ${img.year}`);
  if (img.category) categories.add(img.category);
});

assert(categories.size >= 4, `Multiple categories present: ${Array.from(categories).join(', ')}`);

// 3. Verify Sponsor Attribution
const sponsoredImages = demoMandal.gallery.filter(img => img.sponsorId);
assert(sponsoredImages.length >= 2, `Found ${sponsoredImages.length} sponsored gallery images`);

sponsoredImages.forEach(img => {
  const sponsor = demoMandal.sponsors.find(s => s.id === img.sponsorId);
  assert(sponsor !== undefined, `Sponsor ${img.sponsorId} resolved in demoMandal sponsors`);
  assert(sponsor.name.mr && sponsor.name.hi && sponsor.name.en, `Sponsor ${sponsor.id} has localized name`);
});

// 4. Verify demoMandal2 gallery
assert(Array.isArray(demoMandal2.gallery) && demoMandal2.gallery.length === 3, 'demoMandal2 has 3 gallery items');
demoMandal2.gallery.forEach((img, idx) => {
  assert(img.category !== undefined, `demoMandal2 image ${idx + 1} has category: ${img.category}`);
});

// 5. Verify Translations across MR, HI, EN
['mr', 'hi', 'en'].forEach(lang => {
  const t = translations[lang];
  assert(!!t.momentsOfCelebration, `momentsOfCelebration translation exists for ${lang}: ${t.momentsOfCelebration}`);
  assert(!!t.galleryCategoryAll, `galleryCategoryAll translation exists for ${lang}: ${t.galleryCategoryAll}`);
  assert(!!t.galleryCategoryDarshan, `galleryCategoryDarshan translation exists for ${lang}: ${t.galleryCategoryDarshan}`);
  assert(!!t.galleryCategoryAarti, `galleryCategoryAarti translation exists for ${lang}: ${t.galleryCategoryAarti}`);
  assert(!!t.galleryCategoryGarba, `galleryCategoryGarba translation exists for ${lang}: ${t.galleryCategoryGarba}`);
  assert(!!t.galleryCategoryVisarjan, `galleryCategoryVisarjan translation exists for ${lang}: ${t.galleryCategoryVisarjan}`);
  assert(!!t.presentedWithSupportOf, `presentedWithSupportOf translation exists for ${lang}: ${t.presentedWithSupportOf}`);
  assert(!!t.sharePhoto, `sharePhoto translation exists for ${lang}: ${t.sharePhoto}`);
  assert(!!t.closeLightbox, `closeLightbox translation exists for ${lang}: ${t.closeLightbox}`);
});

// 6. Verify Devanagari numerals
assert(toDevanagariNumerals(2025) === '२०२५', '2025 converts to २०२५');
assert(toDevanagariNumerals(1) === '१', '1 converts to १');
assert(toDevanagariNumerals(6) === '६', '6 converts to ६');

if (passed) {
  console.log('\nALL STEP 11 TESTS PASSED SUCCESSFULLY!');
} else {
  console.error('\nSOME TESTS FAILED!');
  process.exit(1);
}
