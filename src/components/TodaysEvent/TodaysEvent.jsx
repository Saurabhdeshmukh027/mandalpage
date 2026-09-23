import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { getTodaySchedule, getCurrentDate } from '../../utils/dateUtils';
import { useInView } from '../../hooks/useInView';
import './TodaysEvent.css';

export default function TodaysEvent() {
  const { schedule, location } = useMandal();
  const { t, getLocalized, language } = useLanguage();
  const [ref, isVisible] = useInView();
  const todaySchedule = getTodaySchedule(schedule);
  const today = getCurrentDate();

  const formattedDate = `${today.getDate()} ${['January','February','March','April','May','June','July','August','September','October','November','December'][today.getMonth()]} ${today.getFullYear()}`;

  // Get the primary event for today (first event, typically the most important)
  const primaryEvent = todaySchedule?.events?.[0];

  return (
    <section className="todays-event section" aria-label={t('today')}>
      <div
        ref={ref}
        className={`container todays-event__inner reveal ${isVisible ? 'reveal--visible' : ''}`}
      >
        <p className="eyebrow todays-event__eyebrow">{t('todayAtMandal')}</p>
        <p className="todays-event__date">{formattedDate.toUpperCase()}</p>

        {todaySchedule && primaryEvent ? (
          <div className="todays-event__card">
            <div
              className="todays-event__day-badge"
              style={{
                backgroundColor: `${todaySchedule.colorHex}15`,
                color: todaySchedule.colorHex,
              }}
            >
              {t('dayBadge')} {String(todaySchedule.day).padStart(2, '0')} • {todaySchedule.color}
            </div>

            <p className="todays-event__goddess-marathi">
              {getLocalized(todaySchedule.goddess)}
            </p>
            {language !== 'en' && typeof todaySchedule.goddess === 'object' && todaySchedule.goddess.en && (
              <p className="todays-event__goddess">{todaySchedule.goddess.en}</p>
            )}

            <div className="todays-event__divider" aria-hidden="true" />

            <p className="todays-event__event-title-marathi">
              {getLocalized(primaryEvent.title)}
            </p>
            {language !== 'en' && typeof primaryEvent.title === 'object' && primaryEvent.title.en && (
              <p className="todays-event__event-title">{primaryEvent.title.en}</p>
            )}

            <p className="todays-event__time">
              {primaryEvent.time}
              {primaryEvent.endTime ? ` — ${primaryEvent.endTime}` : ''}
            </p>

            <p className="todays-event__venue">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {getLocalized(primaryEvent.venue || location.venue)}
            </p>

            {primaryEvent.description && (
              <p className="todays-event__description">{getLocalized(primaryEvent.description)}</p>
            )}

            {/* Show additional events if any */}
            {todaySchedule.events.length > 1 && (
              <p className="todays-event__description" style={{ marginTop: '12px', fontWeight: 500, color: 'var(--color-sindoor)' }}>
                + {todaySchedule.events.length - 1} {t('moreEvents')}
              </p>
            )}
          </div>
        ) : (
          <div className="todays-event__empty">
            <p className="todays-event__empty-text">{t('noEventsToday')}</p>
          </div>
        )}
      </div>
    </section>
  );
}
