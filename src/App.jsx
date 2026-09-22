import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MandalWebsite from './pages/MandalWebsite';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/m/:slug" element={<MandalWebsite />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
