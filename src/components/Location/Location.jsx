import { useMandal } from '../../context/MandalContext';
import { useInView } from '../../hooks/useInView';
import { formatDateRange } from '../../utils/dateUtils';
import './Location.css';

export default function Location() {
  const { location, festival } = useMandal();
  const [ref, isVisible] = useInView();

  return (
    <section id="location" className="location-section section" aria-label="Location">
      <div ref={ref} className={`container reveal ${isVisible ? 'reveal--visible' : ''}`}>
        <div className="location__inner">
          <div className="location__content">
            <p className="eyebrow location__eyebrow">Visit Us</p>
            <h2 className="heading-display heading-display--lg location__title">
              Come Celebrate With Us
            </h2>

            <div className="location__details">
              <div className="location__detail">
                <div className="location__detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="location__detail-text">
                  <p className="location__detail-label">Venue</p>
                  <p className="location__detail-value">{location.venue}</p>
                </div>
              </div>

              <div className="location__detail">
                <div className="location__detail-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div className="location__detail-text">
                  <p className="location__detail-label">Address</p>
                  <p className="location__detail-value">{location.address}</p>
                </div>
              </div>

              {location.landmark && (
                <div className="location__detail">
                  <div className="location__detail-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div className="location__detail-text">
                    <p className="location__detail-label">Landmark</p>
                    <p className="location__detail-value">{location.landmark}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="location__actions">
              {location.mapsUrl && (
                <a
                  href={location.mapsUrl}
                  className="btn btn--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Open in Google Maps
                </a>
              )}
            </div>
          </div>

          {/* Visual Panel (Desktop) */}
          <div className="location__visual" aria-hidden="true">
            <div className="location__visual-inner">
              <div className="location__visual-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <p className="location__visual-text">{location.venue}</p>
              <p style={{ fontSize: 'var(--text-sm)', marginTop: '4px', color: 'var(--color-text-subtle)' }}>
                {location.city}, {location.state}
              </p>
              <p style={{ fontSize: 'var(--text-xs)', marginTop: 'var(--space-md)', color: 'var(--color-text-subtle)', opacity: 0.7 }}>
                {formatDateRange(festival.startDate, festival.endDate)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
