'use client';

import { useState, useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import NavBar from '../components/navBar/navBar';
import styles from './page.module.css';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('Tab1');

  useEffect(() => {
    const lightbox = GLightbox({
      selector: '[data-glightbox="gallery"]',
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tab1Images = [
    '/assets/images/homelette.jpeg',
    '/assets/images/homelette2.jpeg',
    '/assets/images/painperdu.jpeg',
    '/assets/images/brouillioeuf.jpeg',
    '/assets/images/jacques.jpeg',
    '/assets/images/jambon.jpeg',
    '/assets/images/cremebrulée.jpeg',
    '/assets/images/planche.jpeg',
    '/assets/images/planche2.jpeg',
    '/assets/images/pouletriz.jpeg',
    '/assets/images/tiramisu.jpeg',
    '/assets/images/soupe.jpeg',
  ];

  const tab2Images = [
    '/assets/images/planche.jpeg',
    '/assets/images/planche2.jpeg',
    '/assets/images/pouletriz.jpeg',
    '/assets/images/tiramisu.jpeg',
    '/assets/images/soupe.jpeg',
    '/assets/images/homelette.jpeg',
    '/assets/images/jacques.jpeg',
    '/assets/images/jambon.jpeg',
    '/assets/images/cremebrulée.jpeg',
  ];

  return (
    <main>
      <NavBar />
      <Hero title="Gallery" imageSrc="/assets/images/hero.jpg" />

      <section className={`${styles.galleryContainer} section_gallery`}>
        <div className={styles.tabContainer}>
          <button
            className={`${styles.tab} ${activeTab === 'Tab1' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('Tab1')}
          >
            Plats
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'Tab2' ? styles.activeTab : ''}`}
            onClick={() => handleTabClick('Tab2')}
          >
            Restaurants
          </button>
        </div>

        <div className={styles.imageGrid}>
          {activeTab === 'Tab1' &&
            tab1Images.map((image, index) => (
              <a
                key={index}
                href={image}
                data-glightbox="gallery"
                className={styles.imageContainer}
              >
                <img src={image} alt={`Tab1 Image ${index + 1}`} className={styles.image} />
              </a>
            ))}

          {activeTab === 'Tab2' &&
            tab2Images.map((image, index) => (
              <a
                key={index}
                href={image}
                data-glightbox="gallery"
                className={styles.imageContainer}
              >
                <img src={image} alt={`Tab2 Image ${index + 1}`} className={styles.image} />
              </a>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
