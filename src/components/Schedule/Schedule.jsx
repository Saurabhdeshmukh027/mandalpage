import { useState } from 'react';
import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { isToday, formatDate } from '../../utils/dateUtils';
import { useInView } from '../../hooks/useInView';
import './Schedule.css';

export default function Schedule() {
  const { schedule } = useMandal();
  const { t, getLocalized, language } = useLanguage();
  const [activeDay, setActiveDay] = useState(null);
  const [ref, isVisible] = useInView();

  const toggleDay = (day) => {
    setActiveDay(prev => (prev === day ? null : day));
  };

  return (
    <section id="schedule" className="schedule section" aria-label={t('schedule')}>
      <div className="container">
        <div
          ref={ref}
          className={`schedule__header reveal ${isVisible ? 'reveal--visible' : ''}`}
        >
          <p className="eyebrow">{t('celebrationDays')}</p>
          <h2 className="heading-display heading-display--lg">
            {t('theSacredNine')}
          </h2>
          <p className="schedule__subtitle">
            {t('scheduleSubtitle')}
          </p>
        </div>

        <div className="schedule__timeline" role="list">
          {schedule.map((day) => {
            const isActive = activeDay === day.day;
            const isTodayDay = isToday(day.date);

            return (
              <ScheduleDay
                key={day.day}
                day={day}
                isActive={isActive}
                isToday={isTodayDay}
                onToggle={() => toggleDay(day.day)}
                t={t}
                getLocalized={getLocalized}
                language={language}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScheduleDay({ day, isActive, isToday: isTodayDay, onToggle, t, getLocalized, language }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const dayClasses = [
    'schedule__day',
    isActive && 'schedule__day--active',
    isTodayDay && 'schedule__day--today',
  ].filter(Boolean).join(' ');

  const goddessName = getLocalized(day.goddess);

  return (
    <div
      ref={ref}
      className={`${dayClasses} reveal ${isVisible ? 'reveal--visible' : ''}`}
      role="listitem"
    >
      <div className="schedule__day-dot" style={isTodayDay ? {} : isActive ? { borderColor: day.colorHex } : {}} aria-hidden="true" />

      <button
        className="schedule__day-header"
        onClick={onToggle}
        aria-expanded={isActive}
        aria-controls={`schedule-content-${day.day}`}
      >
        <div className="schedule__day-number">
          {t('dayBadge')} {String(day.day).padStart(2, '0')}
          <span>{formatDate(day.date, 'day-month')}</span>
        </div>

        <div className="schedule__day-info">
          <p className="schedule__day-goddess-marathi">{goddessName}</p>
          {language !== 'en' && typeof day.goddess === 'object' && day.goddess.en && (
            <p className="schedule__day-goddess">{day.goddess.en}</p>
          )}
        </div>

        <div className="schedule__day-meta">
          {isTodayDay && <span className="schedule__today-badge">{t('todayBadge')}</span>}
          <span
            className="schedule__day-color"
            style={{ backgroundColor: day.colorHex }}
            title={day.color}
            aria-label={`${t('dayBadge')} ${day.color}`}
          />
          <svg
            className="schedule__day-chevron"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      <div
        id={`schedule-content-${day.day}`}
        className="schedule__day-content"
        role="region"
        aria-label={`${t('dayBadge')} ${day.day} events`}
        hidden={!isActive}
      >
        <div className="schedule__day-body">
          {day.events.map((event, i) => {
            const eventTitle = getLocalized(event.title);
            const eventDesc = getLocalized(event.description);
            const eventVenue = getLocalized(event.venue);

            return (
              <div className="schedule__event" key={i}>
                {event.eventType && (
                  <p className="schedule__event-type">{event.eventType}</p>
                )}
                <p className="schedule__event-title">{eventTitle}</p>
                {language !== 'en' && typeof event.title === 'object' && event.title.en && (
                  <p className="schedule__event-title-en">{event.title.en}</p>
                )}
                <div className="schedule__event-details">
                  <span className="schedule__event-detail">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                    {event.time}{event.endTime ? ` — ${event.endTime}` : ''}
                  </span>
                  {eventVenue && (
                    <span className="schedule__event-detail">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      {eventVenue}
                    </span>
                  )}
                </div>
                {eventDesc && (
                  <p className="schedule__event-description">{eventDesc}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
