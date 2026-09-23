import { useState, useCallback } from 'react';
import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { useInView } from '../../hooks/useInView';
import Lightbox from './Lightbox';
import './Gallery.css';

export default function Gallery() {
  const { gallery } = useMandal();
  const { t, getLocalized } = useLanguage();
  const [ref, isVisible] = useInView();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
  }, []);

  if (!gallery || gallery.length === 0) return null;

  // Separate featured from regular
  const featured = gallery.filter(img => img.featured);
  const regular = gallery.filter(img => !img.featured);
  const orderedGallery = [...featured, ...regular];

  return (
    <section id="gallery" className="gallery section" aria-label={t('gallery')}>
      <div ref={ref} className={`container reveal ${isVisible ? 'reveal--visible' : ''}`}>
        <div className="gallery__header">
          <p className="eyebrow">{t('mandalMemories')}</p>
          <h2 className="heading-display heading-display--lg">
            {t('galleryHeading')}
          </h2>
        </div>

        <div className="gallery__grid">
          {orderedGallery.map((image, index) => {
            const caption = getLocalized(image.caption);
            const alt = getLocalized(image.alt);

            return (
              <button
                key={image.id}
                className={`gallery__item ${image.featured ? 'gallery__item--featured' : ''}`}
                onClick={() => openLightbox(index)}
                aria-label={`View ${caption || alt}`}
                type="button"
              >
                <img
                  className="gallery__img"
                  src={image.src}
                  alt={alt}
                  loading="lazy"
                  onError={(e) => {
                    // Hide broken images gracefully
                    e.target.closest('.gallery__item').style.display = 'none';
                  }}
                />
                {caption && (
                  <div className="gallery__item-overlay" aria-hidden="true">
                    <span className="gallery__caption">{caption}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={orderedGallery}
        currentIndex={lightboxIndex}
        onClose={closeLightbox}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
