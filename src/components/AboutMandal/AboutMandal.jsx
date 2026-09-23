import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { useInView } from '../../hooks/useInView';
import './AboutMandal.css';

export default function AboutMandal() {
  const { identity } = useMandal();
  const { t, getLocalized, language } = useLanguage();
  const [ref, isVisible] = useInView();

  const mandalName = getLocalized(identity.name);
  const description = getLocalized(identity.description);
  const communitySize = getLocalized(identity.communitySize, '250+ Families');

  return (
    <section id="about" className="about section" aria-label={t('ourStory')}>
      <div ref={ref} className={`container reveal ${isVisible ? 'reveal--visible' : ''}`}>
        <div className="about__inner">
          {/* Image */}
          {identity.aboutImageUrl && (
            <div className="about__image-wrapper">
              <img
                className="about__image"
                src={identity.aboutImageUrl}
                alt={`${mandalName} community celebration`}
                loading="lazy"
              />
            </div>
          )}

          {/* Content */}
          <div className="about__content">
            <p className="eyebrow about__eyebrow">{t('ourStory')}</p>

            <h2 className="heading-display heading-display--md about__title">
              {mandalName}
            </h2>

            {description && (
              <p className="about__description">{description}</p>
            )}

            {/* Stats */}
            <div className="about__stats">
              {identity.established && (
                <div className="about__stat">
                  <span className="about__stat-value">{identity.established}</span>
                  <span className="about__stat-label">{t('established')}</span>
                </div>
              )}
              {communitySize && (
                <div className="about__stat">
                  <span className="about__stat-value">{communitySize}</span>
                  <span className="about__stat-label">{t('community')}</span>
                </div>
              )}
              <div className="about__stat">
                <span className="about__stat-value">{t('nineDaysCelebration')}</span>
                <span className="about__stat-label">{t('celebration')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
