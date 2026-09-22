import { useMandal } from '../../context/MandalContext';
import { formatDateRange } from '../../utils/dateUtils';
import './Hero.css';

export default function Hero() {
  const { identity, festival, location } = useMandal();

  const dateRange = formatDateRange(festival.startDate, festival.endDate);

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
            alt={`${identity.name} — Navratri celebration`}
            loading="eager"
            fetchPriority="high"
          />
        )}
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">{festival.name}</p>

        <h1 className="hero__title">
          {identity.name.split(' ').reduce((acc, word, i, arr) => {
            // Put "Utsav Mandal" on its own line if present
            if (word === 'Utsav' && i < arr.length - 1) {
              return [...acc, <br key={i} />, word, ' '];
            }
            return [...acc, word, i < arr.length - 1 ? ' ' : ''];
          }, [])}
        </h1>

        <p className="hero__title-marathi">{identity.nameMarathi}</p>

        <p className="hero__location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {location.address}
        </p>

        <p className="hero__dates">{dateRange}</p>

        <p className="hero__venue">{location.venue}</p>

        <p className="hero__tagline">{identity.tagline}</p>

        <div className="hero__actions">
          <a
            href="#schedule"
            className="btn btn--hero"
            onClick={(e) => handleNavClick(e, '#schedule')}
          >
            Explore 9-Day Schedule
          </a>
          <a
            href="#location"
            className="btn btn--hero-outline"
            onClick={(e) => handleNavClick(e, '#location')}
          >
            View Location
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
