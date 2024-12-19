'use client';

import { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import Hero from '../components/hero/hero';
import styles from './page.module.css';
import Image from 'next/image';

export default function Menu() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '[data-glightbox="gallery"]',
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <main>
      <Hero title="Menu" imageSrc="/assets/images/hero.jpg" />

      <section className={`${styles.menuContainer} section_menu`}>
        <a href="/assets/images/menu1.png" data-glightbox="gallery" className={styles.menuItem}>
          <Image
            height={800}
            width={800}
            src="/assets/images/menu1.png"
            alt="Menu Item 1"
            className={styles.menuImage}
          />
        </a>
        <a href="/assets/images/menu2.png" data-glightbox="gallery" className={styles.menuItem}>
          <Image
            height={800}
            width={800}
            src="/assets/images/menu2.png"
            alt="Menu Item 2"
            className={styles.menuImage}
          />
        </a>
      </section>
    </main>
  );
}