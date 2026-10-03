import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { galleryImages } from '../data/school';
import Lightbox from './Lightbox';
import InfiniteImageField from './InfiniteImageField';
import './Gallery.css';

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const imageSrcs = useMemo(
    () => galleryImages.map((image) => image.src),
    []
  );

  const openLightboxBySrc = (src: string) => {
    const index = galleryImages.findIndex((image) => image.src === src);

    if (index !== -1) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        {/* PHOTOS */}
        <motion.div
          className="gallery__intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Photos</span>

          <h2 className="gallery__title">
            Moments from Brookwell.
          </h2>

          <p className="gallery__lead">
            Drift through moments captured around the Brookwell Harmony School
            community, or click any photograph to look closer.
          </p>
        </motion.div>

        <motion.div
          className="gallery__field-wrap"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <InfiniteImageField
            images={imageSrcs}
            onImageSelect={openLightboxBySrc}
            ariaLabel="An endless drifting field of Brookwell Harmony School photographs. Click any photograph to open it."
          />
        </motion.div>

        {/* VIDEOS */}
        <motion.div
          id="videos"
          className="gallery__videos"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="eyebrow">Videos</span>

          <h2 className="gallery__title">
            See Brookwell in motion.
          </h2>

          <p className="gallery__lead">
            School videos and highlights will appear here as they are shared
            by Brookwell Harmony School.
          </p>

          <div className="gallery__videos-placeholder">
            <div className="gallery__videos-icon" aria-hidden="true">
              ▶
            </div>

            <div>
              <h3>Videos coming soon</h3>
              <p>
                This space is ready for Brookwell’s official school videos,
                events and highlights.
              </p>
            </div>
          </div>
        </motion.div>

        {/* QUOTE */}
        <motion.div
          className="gallery__quote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="gallery__quote-label">
            A journey worth remembering
          </span>

          <blockquote className="gallery__quote-text">
            “The moments we remember become part of the journey.”
          </blockquote>
        </motion.div>
      </div>

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}

export default Gallery;