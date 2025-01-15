'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './hero.module.css';
import { useSlideDown, useSlideInFromBottom } from '@/app/animations/animationsgsap';
import { WordWrapper } from '@/app/utils/wordWrapper';

// Custom Hook to manage the animations
const useAnimations = (windowHeight: number, windowWidth: number) => {
  const distanceCenterWindowToCenterHero = window.innerHeight * 0.5 - window.innerHeight * 0.35;

  useSlideDown(
    "#hero .anim_img_bg",
    "#hero .anim_img_bg",
    `center+=${distanceCenterWindowToCenterHero} center`,
    "bottom top",
    window.innerHeight * 0.08
  );

  useSlideInFromBottom(
    ".word .letter",
    0.4,
    0.5,
    "120",
    0.015
  );
};

interface HeroProps {
  heroTitle: string;
  imageSrc: string;
}

export default function Hero({ heroTitle, imageSrc }: HeroProps): JSX.Element {
  const [windowWidth, setWindowWidth] = useState<number>(1920);
  const [windowHeight, setWindowHeight] = useState<number>(1080);

  // Move the hook call outside of `useEffect`
  useAnimations(windowHeight, windowWidth);  // Hook called directly in the component

  useEffect(() => {
    const handleResize = (): void => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight * 0.8);
      }
    };

    handleResize(); // Initialize the resize handler

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.image_container}>
        <Image
          className={`${styles.hero_bgimage} anim_img_bg`}
          src={imageSrc}
          width={windowWidth}
          height={windowHeight}
          alt="Hero background"
        />
      </div>
      <div className="overlay"></div>
      <h1 className={`${styles.hero_title} title_XL`}>
        {heroTitle && <WordWrapper title={heroTitle} letterWrapper={true} />}
      </h1>

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
