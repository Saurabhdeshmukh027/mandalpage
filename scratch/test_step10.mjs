import { demoMandal } from '../src/data/demoMandal.js';
import { getMilestones, getCommunityStats, getSocialInitiatives, getAchievements } from '../src/data/mandals.js';
import { translations } from '../src/i18n/translations.js';
import { toDevanagariNumerals } from '../src/utils/dateUtils.js';

console.log('--- TEST STEP 10: MANDAL HISTORY, LEGACY & COMMUNITY ---');

let passed = true;

function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    passed = false;
  } else {
    console.log('PASS:', message);
  }
}

// 1. Verify demoMandal History & Identity
assert(demoMandal.identity.established === 1998, 'demoMandal established is 1998');
assert(demoMandal.establishedYear === 1998, 'demoMandal establishedYear is 1998');
assert(typeof demoMandal.history.description.mr === 'string' && demoMandal.history.description.mr.length > 50, 'demoMandal history Marathi narrative present');
assert(typeof demoMandal.history.description.hi === 'string' && demoMandal.history.description.hi.length > 50, 'demoMandal history Hindi narrative present');
assert(typeof demoMandal.history.description.en === 'string' && demoMandal.history.description.en.length > 50, 'demoMandal history English narrative present');

// 2. Verify Milestones
const milestones = getMilestones('shri-durga-utsav-mandal');
assert(Array.isArray(milestones) && milestones.length === 5, 'Found 5 milestones for demoMandal');
milestones.forEach((m, idx) => {
  assert(typeof m.year === 'number', `Milestone ${idx+1} year is number: ${m.year}`);
  assert(m.title.mr && m.title.hi && m.title.en, `Milestone ${idx+1} has mr, hi, en title`);
  assert(m.description.mr && m.description.hi && m.description.en, `Milestone ${idx+1} has mr, hi, en description`);
  assert(typeof m.category === 'string', `Milestone ${idx+1} has category: ${m.category}`);
});

// 3. Verify Community Statistics (Numbers, NOT arbitrary strings)
const stats = getCommunityStats('shri-durga-utsav-mandal');
assert(stats !== null, 'Community stats exists');
assert(typeof stats.families === 'number' && stats.families === 250, 'stats.families is number 250');
assert(typeof stats.volunteers === 'number' && stats.volunteers === 120, 'stats.volunteers is number 120');
assert(typeof stats.yearsActive === 'number' && stats.yearsActive === 28, 'stats.yearsActive is number 28');
assert(typeof stats.socialInitiatives === 'number' && stats.socialInitiatives === 15, 'stats.socialInitiatives is number 15');
assert(typeof stats.culturalPrograms === 'number' && stats.culturalPrograms === 25, 'stats.culturalPrograms is number 25');

// 4. Verify Social Initiatives
const initiatives = getSocialInitiatives('shri-durga-utsav-mandal');
assert(Array.isArray(initiatives) && initiatives.length === 3, 'Found 3 social initiatives');
initiatives.forEach((init, idx) => {
  assert(init.title.mr && init.title.hi && init.title.en, `Initiative ${idx+1} has localized title`);
  assert(init.description.mr && init.description.hi && init.description.en, `Initiative ${idx+1} has localized description`);
  assert(init.category, `Initiative ${idx+1} has category: ${init.category}`);
});

// 5. Verify Achievements
const achievements = getAchievements('shri-durga-utsav-mandal');
assert(Array.isArray(achievements) && achievements.length === 2, 'Found 2 achievements');
achievements.forEach((ach, idx) => {
  assert(ach.title.mr && ach.title.hi && ach.title.en, `Achievement ${idx+1} has localized title`);
  assert(ach.description.mr && ach.description.hi && ach.description.en, `Achievement ${idx+1} has localized description`);
  assert(typeof ach.year === 'number', `Achievement ${idx+1} has year: ${ach.year}`);
  assert(ach.conferredBy.mr && ach.conferredBy.hi && ach.conferredBy.en, `Achievement ${idx+1} has conferredBy`);
});

// 6. Verify Empty State for demoMandal2
const m2Milestones = getMilestones('jai-bhavani-utsav-mandal');
const m2Stats = getCommunityStats('jai-bhavani-utsav-mandal');
const m2Initiatives = getSocialInitiatives('jai-bhavani-utsav-mandal');
const m2Achievements = getAchievements('jai-bhavani-utsav-mandal');

assert(m2Milestones.length === 0, 'demoMandal2 milestones is empty (clean hide)');
assert(m2Stats === null, 'demoMandal2 communityStats is null (clean hide)');
assert(m2Initiatives.length === 0, 'demoMandal2 initiatives is empty (clean hide)');
assert(m2Achievements.length === 0, 'demoMandal2 achievements is empty (clean hide)');

// 7. Verify Translations
['mr', 'hi', 'en'].forEach(lang => {
  const t = translations[lang];
  assert(!!t.ourStory, `ourStory translation exists for ${lang}: ${t.ourStory}`);
  assert(!!t.ourJourney, `ourJourney translation exists for ${lang}: ${t.ourJourney}`);
  assert(!!t.ourCommunity, `ourCommunity translation exists for ${lang}: ${t.ourCommunity}`);
  assert(!!t.communityInitiatives, `communityInitiatives translation exists for ${lang}: ${t.communityInitiatives}`);
  assert(!!t.achievementsHeading, `achievementsHeading translation exists for ${lang}: ${t.achievementsHeading}`);
  assert(!!t.communityFamilies, `communityFamilies translation exists for ${lang}: ${t.communityFamilies}`);
  assert(!!t.activeVolunteers, `activeVolunteers translation exists for ${lang}: ${t.activeVolunteers}`);
  assert(!!t.yearsActive, `yearsActive translation exists for ${lang}: ${t.yearsActive}`);
  assert(!!t.categoryFoundation, `categoryFoundation translation exists for ${lang}: ${t.categoryFoundation}`);
});

// 8. Verify Devanagari conversion utility
assert(toDevanagariNumerals(1998) === '१९९८', '1998 converts to १९९८');
assert(toDevanagariNumerals(250) === '२५०', '250 converts to २५०');

if (passed) {
  console.log('\nALL STEP 10 TESTS PASSED SUCCESSFULLY!');
} else {
  console.error('\nSOME TESTS FAILED!');
  process.exit(1);
}
