import { Link } from 'react-router-dom';
import { getAllMandals } from '../data/mandals';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-warm-white)',
    padding: 'var(--space-xl)',
  },
  inner: {
    maxWidth: '520px',
    textAlign: 'center',
  },
  eyebrow: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-xs)',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'var(--color-sindoor)',
    marginBottom: 'var(--space-md)',
  },
  title: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--text-4xl)',
    fontWeight: 400,
    color: 'var(--color-ink)',
    lineHeight: 1.1,
    marginBottom: 'var(--space-md)',
  },
  subtitle: {
    fontSize: 'var(--text-base)',
    color: 'var(--color-text-muted)',
    lineHeight: 1.6,
    marginBottom: 'var(--space-2xl)',
  },
  mandals: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-md)',
  },
  mandalCard: {
    display: 'block',
    textDecoration: 'none',
    backgroundColor: 'var(--color-warm-paper)',
    border: '1px solid var(--color-border-soft)',
    borderRadius: 'var(--radius-md)',
    padding: 'var(--space-lg) var(--space-xl)',
    textAlign: 'left',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
  },
  mandalName: {
    fontFamily: 'var(--font-heading)',
    fontSize: 'var(--text-lg)',
    fontWeight: 400,
    color: 'var(--color-ink)',
    marginBottom: '4px',
  },
  mandalNameMarathi: {
    fontFamily: 'var(--font-devanagari)',
    fontSize: 'var(--text-sm)',
    fontWeight: 500,
    color: 'var(--color-text-muted)',
    marginBottom: '4px',
  },
  mandalCity: {
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-subtle)',
  },
  powered: {
    marginTop: 'var(--space-3xl)',
    fontSize: 'var(--text-xs)',
    color: 'var(--color-text-subtle)',
  },
  brand: {
    color: 'var(--color-sindoor)',
    fontWeight: 600,
  },
};

export default function Home() {
  const mandals = getAllMandals();

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
        <p style={styles.eyebrow}>E-PavtiBook</p>
        <h1 style={styles.title}>
          Every Mandal Deserves Its Own Digital Home
        </h1>
        <p style={styles.subtitle}>
          Premium digital identity for Indian Devi Mandals. Explore our Mandal pages below.
        </p>

        <div style={styles.mandals}>
          {mandals.map(mandal => (
            <Link
              key={mandal.slug}
              to={`/m/${mandal.slug}`}
              style={styles.mandalCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--color-sindoor)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--color-border-soft)';
              }}
            >
              <p style={styles.mandalName}>{mandal.name}</p>
              <p style={styles.mandalNameMarathi}>{mandal.nameMarathi}</p>
              <p style={styles.mandalCity}>{mandal.city}</p>
            </Link>
          ))}
        </div>

        <p style={styles.powered}>
          Powered by <span style={styles.brand}>E-PavtiBook</span>
        </p>
      </div>
    </div>
  );
}
