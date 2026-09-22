import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMandal } from '../data/mandals';
import { MandalProvider } from '../context/MandalContext';
import { formatDateRange } from '../utils/dateUtils';
import MandalNotFound from './MandalNotFound';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TodaysEvent from '../components/TodaysEvent/TodaysEvent';
import Schedule from '../components/Schedule/Schedule';
import AboutMandal from '../components/AboutMandal/AboutMandal';
import Sponsors from '../components/Sponsors/Sponsors';
import Gallery from '../components/Gallery/Gallery';
import Location from '../components/Location/Location';
import ShareMandal from '../components/ShareMandal/ShareMandal';
import Footer from '../components/Footer/Footer';

export default function MandalWebsite() {
  const { slug } = useParams();
  const mandal = getMandal(slug);

  // Dynamic page title and meta
  useEffect(() => {
    if (mandal) {
      const { identity, festival, location } = mandal;
      const dateRange = formatDateRange(festival.startDate, festival.endDate);

      document.title = `${identity.name} | ${festival.name}`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content',
          `${identity.name} (${identity.nameMarathi}) — ${festival.name} celebration at ${location.venue}, ${location.address}. ${dateRange}. ${identity.tagline}`
        );
      }

      // Update OG tags
      const setMeta = (property, content) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      setMeta('og:title', `${identity.name} | ${festival.name}`);
      setMeta('og:description', `${identity.tagline}. ${festival.name} — ${dateRange} at ${location.venue}, ${location.address}.`);
      if (identity.heroImageUrl) {
        setMeta('og:image', identity.heroImageUrl);
      }
      setMeta('og:url', window.location.href);
    }

    return () => {
      document.title = 'E-PavtiBook — Your Mandal\'s Digital Home';
    };
  }, [mandal]);

  if (!mandal) {
    return <MandalNotFound slug={slug} />;
  }

  return (
    <MandalProvider mandal={mandal}>
      <Navbar />
      <main>
        <Hero />
        <TodaysEvent />
        <Schedule />
        <AboutMandal />
        <Sponsors />
        <Gallery />
        <Location />
        <ShareMandal />
      </main>
      <Footer />
    </MandalProvider>
  );
}
