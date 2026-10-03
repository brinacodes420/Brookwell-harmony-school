import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, school } from '../data/school';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);

    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);

    if (target) {
      const headerOffset = 90;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      requestAnimationFrame(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      });

      window.history.replaceState(null, '', href);
    }
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__bar container">
        <a href="#home" className="header__brand">
          <img
            src="/assets/images/brookwell-logo.png"
            alt="Brookwell Harmony School"
            className="header__logo"
          />

          <span className="header__brand-name">
            {school.name}
          </span>
        </a>

        <nav className="header__nav" aria-label="Primary">
          <ul>
            {nav.map((item) => (
              <li
                key={item.label}
                className={item.dropdown ? 'has-dropdown' : ''}
                onMouseEnter={() =>
                  item.dropdown && setOpenDropdown(item.label)
                }
                onMouseLeave={() =>
                  item.dropdown && setOpenDropdown(null)
                }
              >
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      className="header__dropdown-trigger"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <span className="header__chevron">⌄</span>
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.ul
                          className="header__dropdown"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.href}>
                              <a
                                href={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault();
                                  scrollToSection(subItem.href);
                                }}
                              >
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a
            href="#admissions"
            className="header__action header__action--visit"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#admissions');
            }}
          >
            Book a Visit
          </a>

          <a
            href={`https://wa.me/${school.whatsappDial}`}
            className="header__action header__action--whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>

          <a
            href="#admissions"
            className="header__action header__action--enquire"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#admissions');
            }}
          >
            Enquire
          </a>

          <button
            type="button"
            className="header__toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`header__toggle-line ${
                menuOpen ? 'is-open' : ''
              }`}
            />
            <span
              className={`header__toggle-line ${
                menuOpen ? 'is-open' : ''
              }`}
            />
            <span
              className={`header__toggle-line ${
                menuOpen ? 'is-open' : ''
              }`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="header__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ul>
              {nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  className={item.dropdown ? 'mobile-has-dropdown' : ''}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.3,
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        className="header__mobile-dropdown-trigger"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label
                              ? null
                              : item.label
                          )
                        }
                        aria-expanded={
                          mobileDropdown === item.label
                        }
                      >
                        <span>{item.label}</span>
                        <span
                          className={`header__chevron ${
                            mobileDropdown === item.label
                              ? 'is-open'
                              : ''
                          }`}
                        >
                          ⌄
                        </span>
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.ul
                            className="header__mobile-submenu"
                            initial={{
                              opacity: 0,
                              height: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: 'auto',
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                            }}
                          >
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.href}>
                                <a
                                  href={subItem.href}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(
                                      subItem.href
                                    );
                                  }}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>

            <a
              href="#admissions"
              className="btn btn--primary"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#admissions');
              }}
            >
              Enquire About Admissions
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;