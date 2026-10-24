import { nav, school } from '../data/school';
import { useNavigate } from 'react-router-dom';
import CardNav from './CardNav';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    if (href === '#home') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const aboutSections = [
      '#about',
      '#story',
      '#values',
      '#leadership',
      '#facilities',
      '#safeguarding',
    ];

    if (aboutSections.includes(href)) {
      navigate(`/about${href === '#about' ? '#story' : href}`);
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      const headerOffset = 90;
      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      window.history.replaceState(null, '', href);
      return;
    }

    navigate('/');
  };

  const cardItems = nav.map((item) => ({
  label: item.label,
  links: item.dropdown
    ? item.dropdown.map((subItem) => ({
        label: subItem.label,
        href: subItem.href,
      }))
    : [],
  href: item.href,
}));

  return (
    <header className="header">
      <CardNav
        maxWidth={1200}
        logo="/assets/images/brookwell-logo.png"
        logoAlt={school.name}
        logoHref="/"
        items={cardItems}
        cta={{
          label: 'Book a Visit',
          href: '#admissions',
          onClick: (event) => {
            event.preventDefault();
            scrollToSection('#admissions');
          },
        }}
        onLinkClick={(link, _item, event) => {
  event.preventDefault();

  if (link.href) {
    scrollToSection(link.href);
  }
}}
      />
    </header>
  );
}

export default Header;