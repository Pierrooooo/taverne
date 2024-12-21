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
    { src: '/assets/images/homelette.jpeg', width: 900, height: 1600 },
    { src: '/assets/images/homelette2.jpeg', width: 2050, height: 1150 },
    { src: '/assets/images/painperdu.jpeg', width: 2050, height: 1150 },
    { src: '/assets/images/brouillioeuf.jpg', width: 2050, height: 1150 },
    { src: '/assets/images/jacques.jpeg', width: 900, height: 1600 },
    { src: '/assets/images/jambon.jpeg', width: 2040, height: 1530 },
    { src: '/assets/images/cremebrulée.jpeg', width: 1500, height: 1740 },
    { src: '/assets/images/planche.jpeg', width: 800, height: 1600 },
    { src: '/assets/images/planche2.jpeg', width: 1530, height: 2040 },
    { src: '/assets/images/pouletriz.jpeg', width: 900, height: 1600 },
    { src: '/assets/images/tiramisu.jpeg', width: 2050, height: 2020 },
    { src: '/assets/images/soupe.jpeg', width: 900, height: 1600 },
    { src: '/assets/images/chocolat.jpeg', width: 1120, height: 2000 },
  ];

  const tab2Images = [
    { src: '', width: 0, height: 0 },
  ];

  const validTab1Images = tab1Images.filter((image) => image.src.trim() !== '');
  const validTab2Images = tab2Images.filter((image) => image.src.trim() !== '');

  return (
    <main>
      <Hero title="Gallerie" imageSrc="/assets/images/hero.jpg" />

      <section className={`${styles.galleryContainer} section_gallery`}>
        <div className={styles.tabContainer}>
          {validTab1Images.length > 0 && (
            <button
              className={`${styles.tab} ${activeTab === 'Tab1' ? styles.activeTab : ''}`}
              onClick={() => handleTabClick('Tab1')}
            >
              Plats
            </button>
          )}
          {validTab2Images.length > 0 && (
            <button
              className={`${styles.tab} ${activeTab === 'Tab2' ? styles.activeTab : ''}`}
              onClick={() => handleTabClick('Tab2')}
            >
              Le Restaurant
            </button>
          )}
        </div>

        <div id="gallery" className={styles.imageGrid}>
          {activeTab === 'Tab1' &&
            validTab1Images.map((image, index) => (
              <a
                key={index}
                href={image.src}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                className={styles.imageContainer}
              >
                <Image
                  height={0}
                  width={0}
                  src={image.src}
                  alt={`Tab1 Image ${index + 1}`}
                  className={styles.image}
                  sizes="100vw"
                />
              </a>
            ))}

          {activeTab === 'Tab2' &&
            validTab2Images.map((image, index) => (
              <a
                key={index}
                href={image.src}
                data-pswp-width={image.width}
                data-pswp-height={image.height}
                className={styles.imageContainer}
              >
                <Image
                  height={0}
                  width={0}
                  src={image.src}
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
