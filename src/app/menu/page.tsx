'use client';

import { useEffect } from 'react';
import Hero from '../components/hero/hero';
import styles from './page.module.css';
import Image from 'next/image';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Menu() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <main>
      <Hero title="Menu" imageSrc="/assets/images/hero.jpg" />

      <section id="gallery" className={`${styles.menuContainer} section_menu`}>
        <a
          href="/assets/images/menu1.png"
          data-pswp-width="800"
          data-pswp-height="800"
          className={styles.menuItem}
        >
          <Image
            height={800}
            width={800}
            src="/assets/images/menu1.png"
            alt="Menu Item 1"
            className={styles.menuImage}
          />
        </a>
        <a
          href="/assets/images/menu2.png"
          data-pswp-width="800"
          data-pswp-height="800"
          className={styles.menuItem}
        >
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
