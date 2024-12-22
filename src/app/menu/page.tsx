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
          href="/assets/images/menu1.jpg"
          data-pswp-width="872"
          data-pswp-height="1240"
          className={styles.menuItem}
        >
          <Image
            height={1240}
            width={870}
            src="/assets/images/menu1.jpg"
            alt="Menu Item 1"
            className={styles.menuImage}
          />
        </a>
        <a
          href="/assets/images/menu2.jpg"
          data-pswp-width="872"
          data-pswp-height="1240"
          className={styles.menuItem}
        >
          <Image
            height={1240}
            width={870}
            src="/assets/images/menu2.jpg"
            alt="Menu Item 2"
            className={styles.menuImage}
          />
        </a>
      </section>
    </main>
  );
}
