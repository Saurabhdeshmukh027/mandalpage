import { useState } from 'react';
import { useMandal } from '../../context/MandalContext';
import { isToday, formatDate } from '../../utils/dateUtils';
import { useInView } from '../../hooks/useInView';
import './Schedule.css';

export default function Schedule() {
  const { schedule } = useMandal();
  const [activeDay, setActiveDay] = useState(null);
  const [ref, isVisible] = useInView();

  const toggleDay = (day) => {
    setActiveDay(prev => (prev === day ? null : day));
  };

  return (
    <section id="schedule" className="schedule section" aria-label="9-Day Schedule">
      <div className="container">
        <div
          ref={ref}
          className={`schedule__header reveal ${isVisible ? 'reveal--visible' : ''}`}
        >
          <p className="eyebrow">9 Days of Celebration</p>
          <h2 className="heading-display heading-display--lg">
            The Sacred Nine
          </h2>
          <p className="schedule__subtitle">
            Nine days of devotion, culture, community and celebration.
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
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScheduleDay({ day, isActive, isToday: isTodayDay, onToggle }) {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const dayClasses = [
    'schedule__day',
    isActive && 'schedule__day--active',
    isTodayDay && 'schedule__day--today',
  ].filter(Boolean).join(' ');

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
          Day {String(day.day).padStart(2, '0')}
          <span>{formatDate(day.date, 'day-month')}</span>
        </div>

        <div className="schedule__day-info">
          <p className="schedule__day-goddess-marathi">{day.goddessMarathi}</p>
          <p className="schedule__day-goddess">{day.goddess}</p>
        </div>

        <div className="schedule__day-meta">
          {isTodayDay && <span className="schedule__today-badge">Today</span>}
          <span
            className="schedule__day-color"
            style={{ backgroundColor: day.colorHex }}
            title={day.color}
            aria-label={`Day color: ${day.color}`}
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
        aria-label={`Day ${day.day} events`}
        hidden={!isActive}
      >
        <div className="schedule__day-body">
          {day.events.map((event, i) => (
            <div className="schedule__event" key={i}>
              {event.eventType && (
                <p className="schedule__event-type">{event.eventType}</p>
              )}
              <p className="schedule__event-title">{event.titleMarathi}</p>
              <p className="schedule__event-title-en">{event.title}</p>
              <div className="schedule__event-details">
                <span className="schedule__event-detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  {event.time}{event.endTime ? ` — ${event.endTime}` : ''}
                </span>
                <span className="schedule__event-detail">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  {event.venue}
                </span>
              </div>
              {event.description && (
                <p className="schedule__event-description">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
