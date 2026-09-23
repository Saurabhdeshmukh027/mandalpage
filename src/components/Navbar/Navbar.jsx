import { useState, useEffect, useCallback, useRef } from 'react';
import { useMandal } from '../../context/MandalContext';
import { useLanguage } from '../../hooks/useLanguage';
import { useScrollLock } from '../../hooks/useScrollLock';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Navbar.css';

export default function Navbar() {
  const { identity } = useMandal();
  const { t, getLocalized } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Dynamic nav items based on active language
  const navItems = [
    { label: t('schedule'), href: '#schedule' },
    { label: t('ourStory'), href: '#about' },
    { label: t('sponsors'), href: '#sponsors' },
    { label: t('gallery'), href: '#gallery' },
    { label: t('location'), href: '#location' },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => {
      const next = !prev;
      if (next) {
        lockScroll();
      } else {
        unlockScroll();
      }
      return next;
    });
  }, [lockScroll, unlockScroll]);

  const closeMenu = useCallback(() => {
    if (menuOpen) {
      setMenuOpen(false);
      unlockScroll();
    }
  }, [menuOpen, unlockScroll]);

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, closeMenu]);

  // Focus trap in mobile menu
  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;
    const menu = menuRef.current;
    const focusable = menu.querySelectorAll('a, button');
    if (focusable.length > 0) {
      focusable[0].focus();
    }
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mandalName = getLocalized(identity.name);
  const initials = mandalName ? mandalName.slice(0, 2) : 'मं';

  const navClass = [
    'navbar',
    scrolled ? 'navbar--scrolled' : 'navbar--hero',
  ].join(' ');

  return (
    <nav className={navClass} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner">
        {/* Brand */}
        <a href="#hero" className="navbar__brand" onClick={(e) => handleNavClick(e, '#hero')}>
          <span className="navbar__brand-icon" aria-hidden="true">{initials}</span>
          <span className="navbar__brand-name">{mandalName}</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="navbar__link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <LanguageSwitcher isHero={!scrolled} />
          <a
            href="#share"
            className="navbar__cta btn btn--primary btn--sm"
            onClick={(e) => handleNavClick(e, '#share')}
          >
            {t('share')}
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="navbar__mobile-actions">
          <LanguageSwitcher isHero={!scrolled} />
          <button
            ref={hamburgerRef}
            className="navbar__hamburger"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('closeMenu', 'Close menu') : t('openMenu', 'Open menu')}
          >
            <span className="navbar__hamburger-icon" aria-hidden="true">
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
              <span className="navbar__hamburger-line"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="navbar__mobile-links">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="navbar__mobile-link"
                onClick={(e) => handleNavClick(e, item.href)}
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navbar__mobile-cta">
          <a
            href="#share"
            className="btn btn--primary"
            onClick={(e) => handleNavClick(e, '#share')}
            tabIndex={menuOpen ? 0 : -1}
          >
            {t('share')}
          </a>
        </div>
      </div>
    </nav>
  );
}
