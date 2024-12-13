'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './hero.module.css';

interface HeroProps {
  title: string;
  imageSrc: string;
}

export default function Hero({ title, imageSrc }: HeroProps): JSX.Element {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = (): void => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight * 0.8);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.hero} id="hero">
      <Image
        className={styles.hero_bgimage}
        src={imageSrc}
        width={windowWidth}
        height={windowHeight}
        alt="Hero background"
      />
      <div className="overlay"></div>
      <h1 className={`${styles.hero_title} title_XL`}>{title}</h1>
    </div>
  );
}
