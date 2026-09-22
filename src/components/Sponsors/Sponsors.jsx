import { useMandal } from '../../context/MandalContext';
import { useInView } from '../../hooks/useInView';
import './Sponsors.css';

const TIER_LABELS = {
  gold: 'Gold Sponsor',
  silver: 'Silver Sponsor',
  community: 'Community Partner',
  festival: 'Festival Partner',
  supporter: 'Community Supporter',
};

export default function Sponsors() {
  const { sponsors } = useMandal();
  const [ref, isVisible] = useInView();

  if (!sponsors || sponsors.length === 0) return null;

  // Separate featured (gold) from others
  const featured = sponsors.filter(s => s.tier === 'gold');
  const others = sponsors.filter(s => s.tier !== 'gold');

  return (
    <section id="sponsors" className="sponsors section" aria-label="Sponsors">
      <div ref={ref} className={`container reveal ${isVisible ? 'reveal--visible' : ''}`}>
        <div className="sponsors__header">
          <p className="eyebrow">Our Supporters</p>
          <h2 className="heading-display heading-display--lg">
            Celebration Made Possible Together
          </h2>
          <p className="sponsors__subtitle">
            We are grateful to the businesses and community members who support our celebration.
          </p>
        </div>

        {/* Featured Sponsors */}
        {featured.length > 0 && (
          <div className="sponsors__featured">
            {featured.map(sponsor => (
              <div key={sponsor.id} className="sponsors__featured-card">
                <div className={`sponsors__logo sponsors__logo--${sponsor.tier}`}>
                  {sponsor.logoUrl ? (
                    <img src={sponsor.logoUrl} alt={sponsor.name} />
                  ) : (
                    sponsor.initials || sponsor.name.slice(0, 2)
                  )}
                </div>
                <span className={`sponsors__tier-badge sponsors__tier-badge--${sponsor.tier}`}>
                  {TIER_LABELS[sponsor.tier]}
                </span>
                <h3 className="sponsors__name">{sponsor.name}</h3>
                {sponsor.description && (
                  <p className="sponsors__description">{sponsor.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Other Sponsors Grid */}
        {others.length > 0 && (
          <div className="sponsors__grid">
            {others.map(sponsor => (
              <div key={sponsor.id} className="sponsors__card">
                <div className={`sponsors__logo sponsors__logo--${sponsor.tier}`}>
                  {sponsor.logoUrl ? (
                    <img src={sponsor.logoUrl} alt={sponsor.name} />
                  ) : (
                    sponsor.initials || sponsor.name.slice(0, 2)
                  )}
                </div>
                <span className={`sponsors__tier-badge sponsors__tier-badge--${sponsor.tier}`}>
                  {TIER_LABELS[sponsor.tier]}
                </span>
                <h3 className="sponsors__name">{sponsor.name}</h3>
                {sponsor.description && (
                  <p className="sponsors__description">{sponsor.description}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
