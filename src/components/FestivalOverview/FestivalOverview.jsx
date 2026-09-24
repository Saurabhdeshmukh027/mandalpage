import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { useInView } from '../../hooks/useInView';
import { getFestivalDurationDays, formatLocalizedDateRange, toDevanagariNumerals } from '../../utils/dateUtils';
import './FestivalOverview.css';

export default function FestivalOverview() {
  const { festival, schedule, location } = useMandal();
  const { t, getLocalized, language } = useLanguage();
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  if (!festival) return null;

  const festivalName = getLocalized(festival.name) || festival.nameMarathi || 'नवरात्रोत्सव';
  const festivalDesc = getLocalized(festival.description);
  const festivalTheme = getLocalized(festival.theme);
  const venue = getLocalized(location?.venue);
  const address = getLocalized(location?.address);
  const totalDays = getFestivalDurationDays(festival, schedule);
  const localizedDays = (language === 'mr' || language === 'hi') ? toDevanagariNumerals(totalDays) : totalDays;
  const dateRangeStr = formatLocalizedDateRange(festival.startDate, festival.endDate, language);

  return (
    <section id="festival" className="festival-overview section" aria-labelledby="festival-overview-heading">
      <div className="container">
        <div
          ref={ref}
          className={`festival-overview__container reveal ${isVisible ? 'reveal--visible' : ''}`}
        >
          {/* Header */}
          <div className="festival-overview__header">
            <div className="festival-overview__badge-row">
              <span className="festival-overview__eyebrow">{t('festivalOverview')}</span>
              {festival.year && (
                <span className="festival-overview__year-badge">
                  {(language === 'mr' || language === 'hi') ? toDevanagariNumerals(festival.year) : festival.year}
                </span>
              )}
            </div>

            <h2 id="festival-overview-heading" className="heading-display festival-overview__title">
              {festivalName}
            </h2>

            {/* Key Highlight Pill */}
            <div className="festival-overview__meta-bar">
              <div className="festival-overview__meta-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="festival-overview__meta-text">{dateRangeStr}</span>
              </div>

              <div className="festival-overview__meta-divider" aria-hidden="true">•</div>

              <div className="festival-overview__meta-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="festival-overview__meta-highlight">
                  {localizedDays} {t('daysOfCelebration')}
                </span>
              </div>
            </div>

            {/* Theme Display if available */}
            {festivalTheme && (
              <div className="festival-overview__theme-banner" role="note" aria-label={t('festivalTheme')}>
                <span className="festival-overview__theme-label">{t('festivalTheme')}:</span>
                <span className="festival-overview__theme-val">"{festivalTheme}"</span>
              </div>
            )}

            {/* Festival Description */}
            {festivalDesc && (
              <p className="festival-overview__desc">
                {festivalDesc}
              </p>
            )}
          </div>

          {/* Quick Info Grid */}
          <div className="festival-overview__grid">
            <div className="festival-overview__card">
              <div className="festival-overview__card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="festival-overview__card-content">
                <span className="festival-overview__card-eyebrow">{t('celebration')}</span>
                <h3 className="festival-overview__card-title">
                  {localizedDays} {t('daysCount')}
                </h3>
                <p className="festival-overview__card-sub">
                  {t('daysOfCelebration')}
                </p>
              </div>
            </div>

            <div className="festival-overview__card">
              <div className="festival-overview__card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <div className="festival-overview__card-content">
                <span className="festival-overview__card-eyebrow">{t('festivalDates')}</span>
                <h3 className="festival-overview__card-title">
                  {dateRangeStr}
                </h3>
                <p className="festival-overview__card-sub">
                  {festival.year ? `${(language === 'mr' || language === 'hi') ? toDevanagariNumerals(festival.year) : festival.year}` : ''}
                </p>
              </div>
            </div>

            <div className="festival-overview__card">
              <div className="festival-overview__card-icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="festival-overview__card-content">
                <span className="festival-overview__card-eyebrow">{t('location')}</span>
                <h3 className="festival-overview__card-title">
                  {venue}
                </h3>
                {address && (
                  <p className="festival-overview__card-sub">
                    {address}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
