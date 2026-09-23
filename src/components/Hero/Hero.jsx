import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { formatDateRange } from '../../utils/dateUtils';
import './Hero.css';

export default function Hero() {
  const { identity, festival, location } = useMandal();
  const { t, getLocalized, language } = useLanguage();

  const dateRange = formatDateRange(festival.startDate, festival.endDate);
  const mandalName = getLocalized(identity.name);
  const festivalName = getLocalized(festival.name);
  const address = getLocalized(location.address);
  const venue = getLocalized(location.venue);
  const tagline = getLocalized(identity.tagline);

  // Subtitle in alternating script for cultural richness
  const secondaryName = language === 'en'
    ? (typeof identity.name === 'object' ? identity.name.mr : identity.nameMarathi)
    : (typeof identity.name === 'object' ? identity.name.en : identity.name);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Hero">
      {/* Hero Image */}
      <div className="hero__image-wrapper">
        {identity.heroImageUrl && (
          <img
            className="hero__image"
            src={identity.heroImageUrl}
            alt={`${mandalName} — ${festivalName}`}
            loading="eager"
            fetchPriority="high"
          />
        )}
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">{festivalName}</p>

        <h1 className="hero__title">
          {mandalName.split(' ').reduce((acc, word, i, arr) => {
            // Put "Utsav Mandal" on its own line if present
            if ((word === 'Utsav' || word === 'उत्सव') && i < arr.length - 1) {
              return [...acc, <br key={i} />, word, ' '];
            }
            return [...acc, word, i < arr.length - 1 ? ' ' : ''];
          }, [])}
        </h1>

        {secondaryName && (
          <p className="hero__title-marathi">{secondaryName}</p>
        )}

        <p className="hero__location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {address}
        </p>

        <p className="hero__dates">{dateRange}</p>

        <p className="hero__venue">{venue}</p>

        <p className="hero__tagline">{tagline}</p>

        <div className="hero__actions">
          <a
            href="#schedule"
            className="btn btn--hero"
            onClick={(e) => handleNavClick(e, '#schedule')}
          >
            {t('exploreSchedule')}
          </a>
          <a
            href="#location"
            className="btn btn--hero-outline"
            onClick={(e) => handleNavClick(e, '#location')}
          >
            {t('viewLocation')}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
