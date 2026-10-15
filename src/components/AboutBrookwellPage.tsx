
import { motion } from 'framer-motion';
import Values from './Values';

function AboutBrookwellPage() {
  return (
    <main className="about-page" id="main">
      {/* Page introduction */}
      <section className="about-page__hero section">
        <div className="container">
          <motion.span
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            GET TO KNOW US
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Discover Brookwell.
            <br />
            A journey of learning and growth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Brookwell Harmony School serves learners from Playgroup
            to Grade 8, following Kenya's Competency-Based Education
            curriculum.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="about-page__story section">
        <div className="container">
          <span className="eyebrow">01 — OUR STORY</span>

          <h2>A place to learn, discover and grow.</h2>

          <p>
            Every child's learning journey is filled with opportunities
            to explore new ideas, develop skills and discover interests.
            At Brookwell Harmony School, our focus is on supporting
            learners throughout their educational journey, from the
            early years through primary education.
          </p>

          <p>
            Our story continues to grow with the learners, families
            and educators who form part of the school community.
          </p>
        </div>
      </section>

      {/* Vision and Mission */}
      <section id="vision" className="about-page__vision section">
        <div className="container">
          <span className="eyebrow">02 — OUR DIRECTION</span>

          <div className="about-page__direction-grid">
            <article>
              <span>OUR VISION</span>
              <h2>A vision for every learner.</h2>
              <p>
                Draft statement — replace with the school's
                officially approved vision.
              </p>
            </article>

            <article>
              <span>OUR MISSION</span>
              <h2>Learning with purpose.</h2>
              <p>
                Draft statement — replace with the school's
                officially approved mission.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Existing values component */}
      <div id="mission-values">
        <Values />
      </div>

      {/* Leadership */}
      <section id="leadership" className="about-page__leadership section">
        <div className="container">
          <span className="eyebrow">04 — OUR PEOPLE</span>

          <h2>Leadership &amp; Staff</h2>

          <p>
            The people who guide, teach and support learners are an
            important part of a school's learning community.
          </p>

          <p>
            School leadership names, staff profiles and photographs
            will be added after confirmation by the principal.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="about-page__facilities section">
        <div className="container">
          <span className="eyebrow">05 — OUR ENVIRONMENT</span>

          <h2>School Facilities</h2>

          <p>
            Explore the spaces and resources that support learning
            and school life at Brookwell Harmony School.
          </p>

          <p>
            Confirmed facility descriptions and photographs will be
            added after verification by the school.
          </p>
        </div>
      </section>

      {/* Safeguarding */}
      <section
        id="safeguarding"
        className="about-page__safeguarding section"
      >
        <div className="container">
          <span className="eyebrow">06 — CHILD WELLBEING</span>

          <h2>Safeguarding &amp; Child Protection</h2>

          <p>
            Children's safety and wellbeing deserve careful attention.
            This section will explain the school's safeguarding
            procedures, reporting channels and child-protection
            policies once these have been confirmed by the principal.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AboutBrookwellPage;
