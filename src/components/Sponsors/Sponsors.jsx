import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { useInView } from '../../hooks/useInView';
import './Sponsors.css';

export default function Sponsors() {
  const { sponsors } = useMandal();
  const { t, getLocalized } = useLanguage();
  const [ref, isVisible] = useInView();

  if (!sponsors || sponsors.length === 0) return null;

  const getTierLabel = (tier) => {
    switch (tier) {
      case 'gold': return t('goldSponsor');
      case 'silver': return t('silverSponsor');
      case 'community': return t('communityPartner');
      case 'festival': return t('festivalPartner');
      case 'supporter': return t('communitySupporter');
      default: return tier;
    }
  };

  // Separate featured (gold) from others
  const featured = sponsors.filter(s => s.tier === 'gold');
  const others = sponsors.filter(s => s.tier !== 'gold');

  return (
    <section id="sponsors" className="sponsors section" aria-label={t('sponsors')}>
      <div ref={ref} className={`container reveal ${isVisible ? 'reveal--visible' : ''}`}>
        <div className="sponsors__header">
          <p className="eyebrow">{t('ourSupporters')}</p>
          <h2 className="heading-display heading-display--lg">
            {t('sponsorsHeading')}
          </h2>
          <p className="sponsors__subtitle">
            {t('sponsorsSubtitle')}
          </p>
        </div>

        {/* Featured Sponsors */}
        {featured.length > 0 && (
          <div className="sponsors__featured">
            {featured.map(sponsor => {
              const sponsorName = getLocalized(sponsor.name);
              const sponsorDesc = getLocalized(sponsor.description);
              const initials = sponsor.initials || (sponsorName ? sponsorName.slice(0, 2) : 'SP');

              return (
                <div key={sponsor.id} className="sponsors__featured-card">
                  <div className={`sponsors__logo sponsors__logo--${sponsor.tier}`}>
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsorName} />
                    ) : (
                      initials
                    )}
                  </div>
                  <span className={`sponsors__tier-badge sponsors__tier-badge--${sponsor.tier}`}>
                    {getTierLabel(sponsor.tier)}
                  </span>
                  <h3 className="sponsors__name">{sponsorName}</h3>
                  {sponsorDesc && (
                    <p className="sponsors__description">{sponsorDesc}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Other Sponsors Grid */}
        {others.length > 0 && (
          <div className="sponsors__grid">
            {others.map(sponsor => {
              const sponsorName = getLocalized(sponsor.name);
              const sponsorDesc = getLocalized(sponsor.description);
              const initials = sponsor.initials || (sponsorName ? sponsorName.slice(0, 2) : 'SP');

              return (
                <div key={sponsor.id} className="sponsors__card">
                  <div className={`sponsors__logo sponsors__logo--${sponsor.tier}`}>
                    {sponsor.logoUrl ? (
                      <img src={sponsor.logoUrl} alt={sponsorName} />
                    ) : (
                      initials
                    )}
                  </div>
                  <span className={`sponsors__tier-badge sponsors__tier-badge--${sponsor.tier}`}>
                    {getTierLabel(sponsor.tier)}
                  </span>
                  <h3 className="sponsors__name">{sponsorName}</h3>
                  {sponsorDesc && (
                    <p className="sponsors__description">{sponsorDesc}</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
