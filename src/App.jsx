import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MandalWebsite from './pages/MandalWebsite';
import SponsorProfile from './pages/SponsorProfile';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/m/:slug" element={<MandalWebsite />} />
          <Route path="/m/:slug/sponsor/:sponsorSlug" element={<SponsorProfile />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
