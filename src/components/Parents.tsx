import { motion } from 'framer-motion';
import './Parents.css';

const parentAreas = [
  {
    number: '01',
    title: 'Parent Information',
    description:
      'A dedicated space for useful information and resources for Brookwell parents and guardians.',
  },
  {
    number: '02',
    title: 'Notices & Newsletters',
    description:
      'School notices, newsletters and important updates can be shared here as they become available.',
  },
  {
    number: '03',
    title: 'Forms & Downloads',
    description:
      'A central place for school forms, documents and downloadable resources provided by Brookwell.',
  },
  {
    number: '04',
    title: 'Parent Contact & Support',
    description:
      'Information on how parents and guardians can get in touch with the school for support and enquiries.',
  },
];

function Parents() {
  return (
    <section id="parent-information" className="parents section">
      <div className="container">
        <motion.div
          className="parents__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Parents</span>

          <h2 className="parents__title">
            Everything parents need, in one place.
          </h2>

          <p className="parents__lead">
            A dedicated space for parent information, school updates,
            resources and support.
          </p>
        </motion.div>

        <div className="parents__grid">
          {parentAreas.map((area, index) => (
            <motion.article
              key={area.number}
              className="parents__card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              <span className="parents__number">{area.number}</span>

              <h3>{area.title}</h3>

              <p>{area.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="parents__note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>Parent resources</span>
          <p>
            Additional notices, documents and resources can be added here as
            they are provided by the school.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Parents;