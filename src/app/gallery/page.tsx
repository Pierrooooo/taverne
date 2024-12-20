'use client';

import { useState, useEffect } from 'react';
import Hero from '../components/hero/hero';
import styles from './page.module.css';
import Image from 'next/image';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('Tab1');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      showHideAnimationType: 'zoom',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  const tab1Images = [
    '/assets/images/homelette.jpeg',
    '/assets/images/homelette2.jpeg',
    '/assets/images/painperdu.jpeg',
    '/assets/images/brouillioeuf.jpg',
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
    ''
  ];

  return (
    <main>
      <Hero title="Gallerie" imageSrc="/assets/images/hero.jpg" />

      <section className={`${styles.galleryContainer} section_gallery`}>
        <div className={styles.tabContainer}>
          {tab1Images.filter((img) => img.trim() !== '').length > 0 && (
            <button
              className={`${styles.tab} ${activeTab === 'Tab1' ? styles.activeTab : ''}`}
              onClick={() => handleTabClick('Tab1')}
            >
              Plats
            </button>
          )}
          {tab2Images.filter((img) => img.trim() !== '').length > 0 && (
            <button
              className={`${styles.tab} ${activeTab === 'Tab2' ? styles.activeTab : ''}`}
              onClick={() => handleTabClick('Tab2')}
            >
              Restaurant
            </button>
          )}
        </div>

        <div id="gallery" className={styles.imageGrid}>
          {activeTab === 'Tab1' &&
            tab1Images.map((image, index) => (
              <a
                key={index}
                href={image}
                className={styles.imageContainer}
              >
                <Image
                  height={0}
                  width={0}
                  src={image}
                  alt={`Tab1 Image ${index + 1}`}
                  className={styles.image}
                  sizes="100vw"
                />
              </a>
            ))}

          {activeTab === 'Tab2' &&
            tab2Images.map((image, index) => (
              <a
                key={index}
                href={image}
                data-pswp-width="auto"
                data-pswp-height="100vh"
                className={styles.imageContainer}
              >
                <Image
                  height={0}
                  width={0}
                  src={image}
                  alt={`Tab2 Image ${index + 1}`}
                  className={styles.image}
                  sizes="100vw"
                />
              </a>
            ))}
        </div>
      </section>
    </main>
  );
}
