import QRCode from 'qrcode';
import { demoMandal } from '../src/data/demoMandal.js';
import { getMandal, getSponsorBySlug } from '../src/data/mandals.js';
import { translations } from '../src/i18n/translations.js';

console.log('--- Testing Step 13: Individual Sponsor Profile + Share Experience + QR ---');

// 1. Verify Minimum 5 requested sponsors + existing sponsors
const expectedSlugs = [
  'shree-ganesh-jewellers',
  'anand-medicals',
  'shree-balaji-caterers',
  'raj-electricals',
  'anand-nagar-residents-association',
  'sharma-trading-co',
  'anand-nagar-co-op-bank',
  'patil-electronics',
  'deshmukh-builders',
  'kulkarni-sweets',
  'bhagwat-medical',
  'joshi-fabrics',
  'mehta-photography'
];

console.log(`Checking ${expectedSlugs.length} expected sponsors in demoMandal...`);
expectedSlugs.forEach(slug => {
  const sp = getSponsorBySlug('shri-durga-utsav-mandal', slug);
  if (!sp) {
    throw new Error(`Sponsor with slug "${slug}" not found in demoMandal`);
  }
  if (!sp.name.mr || !sp.name.hi || !sp.name.en) {
    throw new Error(`Sponsor "${slug}" missing localizations for name`);
  }
  console.log(`  ✓ Found [${sp.tier}]: ${slug} — ${sp.name.en}`);
});

// 2. Test Sponsor Offers
console.log('Testing sponsors with offers...');
const sponsorsWithOffers = demoMandal.sponsors.filter(s => s.offer);
if (sponsorsWithOffers.length === 0) {
  throw new Error('Expected at least one sponsor with an offer');
}
sponsorsWithOffers.forEach(s => {
  if (!s.offer.title) throw new Error(`Sponsor "${s.slug}" offer missing title`);
  console.log(`  ✓ Offer for ${s.slug}: ${s.offer.title.en} (Badge: ${s.offer.badge?.en || 'N/A'}, Code: ${s.offer.code || 'None'})`);
});

// 3. Test QR Code SVG Generation for Sponsor URLs
console.log('Testing QR Code generation...');
const testSponsorUrl = 'https://epavtibook.com/m/shri-durga-utsav-mandal/sponsor/shree-ganesh-jewellers';
const qrSvg = await QRCode.toString(testSponsorUrl, {
  type: 'svg',
  margin: 2,
  color: { dark: '#241F1D', light: '#FFFFFF' }
});

if (!qrSvg || !qrSvg.startsWith('<svg') || !qrSvg.endsWith('</svg>\n') && !qrSvg.endsWith('</svg>')) {
  throw new Error('QR code generation did not return valid SVG');
}
console.log(`  ✓ Successfully generated QR SVG for "${testSponsorUrl}" (${qrSvg.length} bytes)`);

// 4. Test Translation Keys
console.log('Testing Step 13 translations...');
const requiredKeys = [
  'sponsorProfile',
  'viewSponsor',
  'shareSponsor',
  'festivalOffer',
  'contactSponsor',
  'supportingOurCelebration',
  'openInGoogleMaps',
  'scanToView',
  'scanQRTitle',
  'scanQRSubtitle',
  'socialShareCard',
  'socialShareCardSubtitle',
  'proudToSupport',
  'supportingOurTradition',
  'officialCelebrationPartner',
  'visitMandalWebsite',
  'callPartner',
  'whatsappPartner',
  'visitWebsite',
  'partnerNotFound',
  'partnerNotFoundDesc',
  'shareSuccessMessage',
  'offerValidUntil',
  'offerCode',
  'offerTerms',
  'todayPartnerBanner',
  'downloadCard',
  'previewFormatNotice'
];

['mr', 'hi', 'en'].forEach(lang => {
  const dict = translations[lang];
  if (!dict) throw new Error(`Dictionary missing for ${lang}`);
  requiredKeys.forEach(k => {
    if (!dict[k] || dict[k].trim() === '') {
      throw new Error(`Missing key "${k}" in language "${lang}"`);
    }
  });
  console.log(`  ✓ All ${requiredKeys.length} Step 13 keys present in language: ${lang}`);
});

// 5. Test Invalid Slugs
console.log('Testing invalid slug handling...');
const invalidMandal = getMandal('non-existent-mandal');
if (invalidMandal !== null) throw new Error('getMandal should return null for invalid slug');

const invalidSponsor = getSponsorBySlug('shri-durga-utsav-mandal', 'non-existent-sponsor');
if (invalidSponsor !== null) throw new Error('getSponsorBySlug should return null for invalid slug');
console.log('  ✓ Invalid mandal & sponsor lookups return null safely');

console.log('--- ALL STEP 13 UNIT & INTEGRATION TESTS PASSED! ---');
