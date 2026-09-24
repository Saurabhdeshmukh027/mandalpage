import QRCode from 'qrcode';
import { demoMandal } from '../src/data/demoMandal.js';
import { getDonation } from '../src/data/mandals.js';
import { translations } from '../src/i18n/translations.js';

console.log('--- Testing Step 14: Support the Mandal / Donation Experience ---');

// 1. Verify demoMandal donation configuration
console.log('Checking demoMandal.donation...');
if (!demoMandal.donation || !demoMandal.donation.enabled) {
  throw new Error('demoMandal.donation is missing or not enabled');
}

const d = demoMandal.donation;
if (!d.upiId || typeof d.upiId !== 'string') {
  throw new Error('demoMandal.donation missing upiId');
}
if (!d.title?.mr || !d.title?.hi || !d.title?.en) {
  throw new Error('demoMandal.donation title missing localizations');
}
if (!d.description?.mr || !d.description?.hi || !d.description?.en) {
  throw new Error('demoMandal.donation description missing localizations');
}
if (!Array.isArray(d.suggestedAmounts) || d.suggestedAmounts.length === 0) {
  throw new Error('demoMandal.donation suggestedAmounts missing or empty');
}
if (!d.bankDetails || !d.bankDetails.accountNumber || !d.bankDetails.ifsc) {
  throw new Error('demoMandal.donation bankDetails incomplete');
}
if (!d.contact || !d.contact.phone) {
  throw new Error('demoMandal.donation contact incomplete');
}
console.log(`  ✓ demoMandal donation verified: UPI ID: ${d.upiId}, Amounts: ${d.suggestedAmounts.join(', ')}`);

// 2. Verify empty state on demoMandal2
console.log('Checking demoMandal2 donation empty state...');
const d2 = getDonation('demo-mandal-2');
if (d2 && d2.enabled) {
  throw new Error('demoMandal2 expected donation to be null or disabled');
}
console.log('  ✓ demoMandal2 donation is correctly null/disabled (empty state)');

// 3. Test getDonation helper
const fetchedDonation = getDonation('shri-durga-utsav-mandal');
if (!fetchedDonation || fetchedDonation.upiId !== d.upiId) {
  throw new Error('getDonation helper failed for shri-durga-utsav-mandal');
}
console.log('  ✓ getDonation helper returns matching configuration');

// 4. Test UPI URI and QR Code Generation
console.log('Testing UPI payment URI and QR code generation...');
const testUpiUri = `upi://pay?pa=${d.upiId}&pn=${encodeURIComponent(d.upiName || 'Mandal Trust')}&cu=INR&am=501`;
const qrSvg = await QRCode.toString(testUpiUri, {
  type: 'svg',
  margin: 2,
  color: { dark: '#241F1D', light: '#FFFFFF' }
});

if (!qrSvg || !qrSvg.startsWith('<svg')) {
  throw new Error('QR code generation did not return valid SVG');
}
console.log(`  ✓ Generated valid SVG QR code for "${testUpiUri}" (${qrSvg.length} bytes)`);

// 5. Test Step 14 Translation Keys in mr, hi, en
console.log('Testing Step 14 translations...');
const requiredKeys = [
  'supportTheMandal',
  'supportSubtitle',
  'payViaUpi',
  'scanToContribute',
  'scanUpiAppHint',
  'copyUpiId',
  'upiIdCopied',
  'upiIdLabel',
  'donateOnline',
  'bankTransfer',
  'bankTransferSubtitle',
  'accountName',
  'accountNumber',
  'bankName',
  'ifscCode',
  'branchName',
  'accountDetailsCopied',
  'suggestedContribution',
  'customAmount',
  'needHelpWithContribution',
  'contactDonationDesk',
  'transparencyAndTrust',
  'shareSupportPage',
  'everyContributionMatters',
  'showBankDetails',
  'hideBankDetails',
  'enterAmount'
];

['mr', 'hi', 'en'].forEach(lang => {
  const dict = translations[lang];
  if (!dict) throw new Error(`Dictionary missing for ${lang}`);
  requiredKeys.forEach(k => {
    if (!dict[k] || dict[k].trim() === '') {
      throw new Error(`Missing key "${k}" in language "${lang}"`);
    }
  });
  console.log(`  ✓ All ${requiredKeys.length} Step 14 keys present in language: ${lang}`);
});

console.log('--- ALL STEP 14 UNIT & DATA TESTS PASSED! ---');
