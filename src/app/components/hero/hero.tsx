'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './hero.module.css';

interface HeroProps {
  title: string;
  imageSrc: string;
}

export default function Hero({ title, imageSrc }: HeroProps): JSX.Element {
  const [windowWidth, setWindowWidth] = useState<number>(1920);
  const [windowHeight, setWindowHeight] = useState<number>(1080);

  useEffect(() => {
    const handleResize = (): void => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight * 0.8);
      }
    };

    handleResize();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <Image
        className={styles.hero_bgimage}
        src={imageSrc}
        width={windowWidth}
        height={windowHeight}
        alt="Hero background"
      />
      <div className="overlay"></div>
      <h1 className={`${styles.hero_title} title_XL`}>{title}</h1>
      <p className={styles.scroll_text}>
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
      </p>
    </section>
  );
}
