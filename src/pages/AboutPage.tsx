
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const sections = [
  {
    number: '01',
    id: 'our-story',
    eyebrow: 'Our beginnings',
    title: 'Our Story',
    description:
      'Every meaningful journey begins with a belief in what is possible. At Brookwell Harmony School, learning is a journey of discovery, growth and opportunity for every child.',
    note: 'A place to learn, discover and grow.',
  },
  {
    number: '02',
    id: 'vision-mission',
    eyebrow: 'What guides us',
    title: 'Vision, Mission & Values',
    description:
      'Our vision and mission help shape the learning experience we aspire to create. Through character, curiosity, confidence, community, creativity and growth, we celebrate each learner’s journey.',
    note: 'Our proposed wording awaits school approval.',
  },
  {
    number: '03',
    id: 'leadership',
    eyebrow: 'The people behind the journey',
    title: 'Leadership & Staff',
    description:
      'A school community grows through the people who guide, teach and encourage its learners. Meet the leadership and staff who contribute to life at Brookwell.',
    note: 'Staff names, roles and portraits will be added after confirmation.',
  },
  {
    number: '04',
    id: 'facilities',
    eyebrow: 'Spaces for discovery',
    title: 'School Facilities',
    description:
      'The spaces where children learn, play and explore are an important part of school life. Discover the learning environments and facilities available at Brookwell.',
    note: 'Facilities and photographs will be verified with the school.',
  },
  {
    number: '05',
    id: 'safeguarding',
    eyebrow: 'Every child matters',
    title: 'Safeguarding & Child Protection',
    description:
      'Children deserve to be treated with dignity, care and respect. This section will explain Brookwell’s safeguarding approach, child-protection procedures and the ways families can raise concerns.',
    note: 'The school’s official policies and contact procedures will be added after confirmation.',
  },
];

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page__hero">
        <div className="container about-page__hero-inner">
          <motion.div
            className="about-page__hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-page__eyebrow">
              GET TO KNOW US
            </span>

            <h1>
              Discover
              <br />
              <span>Brookwell.</span>
            </h1>

            <p>
              The people, principles and places that shape our
              school community.
            </p>

            <a
              className="about-page__explore"
              href="#our-story"
            >
              Explore our story
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          <motion.div
            className="about-page__hero-art"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/assets/images/early-years-circle.jpg"
              alt="Young learners taking part in a school activity"
            />
            <div className="about-page__hero-caption">
              <span>OUR COMMUNITY</span>
              <p>Every learner has a story.</p>
            </div>
          </motion.div>
        </div>

        <span
          className="about-page__hero-index"
          aria-hidden="true"
        >
          ABOUT / 01
        </span>
      </section>

      <div className="about-page__contents">
        <div className="container">
          <div className="about-page__intro">
            <span className="about-page__eyebrow">
              A CLOSER LOOK
            </span>
            <h2>
              More than a place to learn.
              <br />
              <span>A community to grow with.</span>
            </h2>
            <p>
              Explore the different parts of Brookwell Harmony
              School, from the ideas that guide us to the people
              and spaces that make up our community.
            </p>
          </div>

          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              className={`about-page__section ${
                index % 2 === 1
                  ? 'about-page__section--reverse'
                  : ''
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65 }}
            >
              <div className="about-page__section-number">
                {section.number}
              </div>

              <div className="about-page__section-copy">
                <span className="about-page__eyebrow">
                  {section.eyebrow}
                </span>

                <h2>{section.title}</h2>

                <p>{section.description}</p>

                <p className="about-page__note">
                  {section.note}
                </p>

                {section.id === 'vision-mission' && (
                  <div className="about-page__values">
                    {[
                      'Character',
                      'Curiosity',
                      'Confidence',
                      'Community',
                      'Creativity',
                      'Growth',
                    ].map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="about-page__section-image">
                <img
                  src={
                    index === 0
                      ? '/assets/images/early-years-circle.jpg'
                      : index === 1
                        ? '/assets/images/group-dance.jpg'
                        : index === 2
                          ? '/assets/images/community-event.jpg'
                          : index === 3
                            ? '/assets/images/school-outing.jpg'
                            : '/assets/images/community-tent.jpg'
                  }
                  alt=""
                  loading="lazy"
                />
              </div>
            </motion.section>
          ))}

          <section className="about-page__closing">
            <span className="about-page__eyebrow">
              CONTINUE EXPLORING
            </span>
            <h2>
              Every journey starts
              <br />
              with a conversation.
            </h2>
            <p>
              Learn more about learning at Brookwell or get in
              touch with the school.
            </p>

            <div className="about-page__closing-actions">
              <Link to="/learning" className="about-page__button">
                Discover learning <span>↗</span>
              </Link>
              <Link
                to="/contact"
                className="about-page__text-link"
              >
                Contact the school <span>↗</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
