import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getMandal } from '../data/mandals';
import { MandalProvider } from '../context/MandalContext';
import { useLanguage } from '../hooks/useLanguage';
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
  const { getLocalized, language } = useLanguage();

  // Dynamic page title and meta reactive to language change
  useEffect(() => {
    if (mandal) {
      const { identity, festival, location } = mandal;
      const mandalName = getLocalized(identity.name);
      const festivalName = getLocalized(festival.name);
      const venue = getLocalized(location.venue);
      const address = getLocalized(location.address);
      const tagline = getLocalized(identity.tagline);
      const dateRange = formatDateRange(festival.startDate, festival.endDate);

      document.title = `${mandalName} | ${festivalName}`;

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content',
          `${mandalName} — ${festivalName} celebration at ${venue}, ${address}. ${dateRange}. ${tagline}`
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

      setMeta('og:title', `${mandalName} | ${festivalName}`);
      setMeta('og:description', `${tagline}. ${festivalName} — ${dateRange} at ${venue}, ${address}.`);
      if (identity.heroImageUrl) {
        setMeta('og:image', identity.heroImageUrl);
      }
      setMeta('og:url', window.location.href);
    }

    return () => {
      document.title = "E-PavtiBook — Your Mandal's Digital Home";
    };
  }, [mandal, language, getLocalized]);

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
