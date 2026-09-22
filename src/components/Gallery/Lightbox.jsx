import { useEffect, useCallback, useRef } from 'react';
import { useScrollLock } from '../../hooks/useScrollLock';

export default function Lightbox({ images, currentIndex, onClose, onNavigate }) {
  const { lockScroll, unlockScroll } = useScrollLock();
  const closeRef = useRef(null);
  const isOpen = currentIndex >= 0;

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      lockScroll();
      closeRef.current?.focus();
    }
    return () => {
      if (isOpen) unlockScroll();
    };
  }, [isOpen, lockScroll, unlockScroll]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onNavigate(prev => Math.max(0, prev - 1));
        break;
      case 'ArrowRight':
        onNavigate(prev => Math.min(images.length - 1, prev + 1));
        break;
    }
  }, [isOpen, images.length, onClose, onNavigate]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  return (
    <div
      className={`lightbox ${isOpen ? 'lightbox--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close */}
      <button
        ref={closeRef}
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close lightbox"
        tabIndex={isOpen ? 0 : -1}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={() => onNavigate(currentIndex - 1)}
          aria-label="Previous image"
          tabIndex={isOpen ? 0 : -1}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Image */}
      {currentImage && (
        <div className="lightbox__image-wrapper">
          <img
            className="lightbox__image"
            src={currentImage.src}
            alt={currentImage.alt}
          />
        </div>
      )}

      {/* Next */}
      {hasNext && (
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={() => onNavigate(currentIndex + 1)}
          aria-label="Next image"
          tabIndex={isOpen ? 0 : -1}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}

      {/* Footer */}
      {currentImage && (
        <div className="lightbox__footer">
          {currentImage.caption && (
            <p className="lightbox__caption-text">{currentImage.caption}</p>
          )}
          <p className="lightbox__counter">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </div>
  );
}
