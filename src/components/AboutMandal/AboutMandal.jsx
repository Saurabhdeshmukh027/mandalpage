import { useMandal } from '../../context/MandalContext';
import { useInView } from '../../hooks/useInView';
import './AboutMandal.css';

export default function AboutMandal() {
  const { identity } = useMandal();
  const [ref, isVisible] = useInView();

  return (
    <section id="about" className="about section" aria-label="About the Mandal">
      <div ref={ref} className={`container reveal ${isVisible ? 'reveal--visible' : ''}`}>
        <div className="about__inner">
          {/* Image */}
          {identity.aboutImageUrl && (
            <div className="about__image-wrapper">
              <img
                className="about__image"
                src={identity.aboutImageUrl}
                alt={`${identity.name} community celebration`}
                loading="lazy"
              />
            </div>
          )}

          {/* Content */}
          <div className="about__content">
            <p className="eyebrow about__eyebrow">About the Mandal</p>

            <h2 className="heading-display heading-display--md about__title">
              A Celebration Built Around{' '}
              <span style={{ color: 'var(--color-sindoor)' }}>Devotion</span> &amp; Community
            </h2>

            {identity.description && (
              <p className="about__description">{identity.description}</p>
            )}

            {identity.descriptionMarathi && (
              <p className="about__description-marathi">{identity.descriptionMarathi}</p>
            )}

            {/* Stats */}
            <div className="about__stats">
              {identity.established && (
                <div className="about__stat">
                  <span className="about__stat-value">{identity.established}</span>
                  <span className="about__stat-label">Established</span>
                </div>
              )}
              {identity.communitySize && (
                <div className="about__stat">
                  <span className="about__stat-value">{identity.communitySize}</span>
                  <span className="about__stat-label">Community</span>
                </div>
              )}
              <div className="about__stat">
                <span className="about__stat-value">9 Days</span>
                <span className="about__stat-label">Celebration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
