/**
 * E-PavtiBook — Date Utilities
 *
 * Provides date helpers for schedule/event detection.
 *
 * PREVIEW DATE SYSTEM:
 * During development, set VITE_PREVIEW_DATE in .env to simulate a specific date.
 * Example: VITE_PREVIEW_DATE=2026-10-17
 * In production, this env var should be unset — the real date is used.
 */

/**
 * Get the "current" date — either the preview date (dev) or real today.
 * @returns {Date}
 */
export function getCurrentDate() {
  const previewDate = import.meta.env.VITE_PREVIEW_DATE;
  if (previewDate) {
    const parsed = new Date(previewDate + 'T00:00:00');
    if (!isNaN(parsed.getTime())) {
      return parsed;
    }
  }
  return new Date();
}

/**
 * Check if a given ISO date string matches the current (or preview) date.
 * @param {string} dateString - ISO date string (YYYY-MM-DD)
 * @returns {boolean}
 */
export function isToday(dateString) {
  const today = getCurrentDate();
  const target = new Date(dateString + 'T00:00:00');
  return (
    today.getFullYear() === target.getFullYear() &&
    today.getMonth() === target.getMonth() &&
    today.getDate() === target.getDate()
  );
}

/**
 * Format a date for display.
 * @param {string} dateString - ISO date string (YYYY-MM-DD)
 * @param {'short'|'long'|'day-month'} format
 * @returns {string}
 */
export function formatDate(dateString, format = 'short') {
  const date = new Date(dateString + 'T00:00:00');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthsShort = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  switch (format) {
    case 'long':
      return `${day} ${months[month]} ${year}`;
    case 'day-month':
      return `${day} ${monthsShort[month].toUpperCase()}`;
    case 'short':
    default:
      return `${day} ${monthsShort[month]}`;
  }
}

/**
 * Format a date range (e.g. "11 — 19 October 2026")
 * @param {string} startDate
 * @param {string} endDate
 * @returns {string}
 */
export function formatDateRange(startDate, endDate) {
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `${start.getDate()} — ${end.getDate()} ${months[end.getMonth()]} ${end.getFullYear()}`;
  }
  return `${start.getDate()} ${months[start.getMonth()]} — ${end.getDate()} ${months[end.getMonth()]} ${end.getFullYear()}`;
}

/**
 * Find the schedule day that matches today (or preview date).
 * @param {import('../types/mandal.js').ScheduleDay[]} schedule
 * @returns {import('../types/mandal.js').ScheduleDay|null}
 */
export function getTodaySchedule(schedule) {
  if (!schedule || !schedule.length) return null;
  return schedule.find(day => isToday(day.date)) || null;
}
