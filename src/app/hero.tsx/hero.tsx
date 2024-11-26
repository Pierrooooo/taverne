'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from "./hero.module.css";

export default function Hero(): JSX.Element {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  
  useEffect(() => {
    const handleResize = (): void => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight * 0.7);
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
        src="/assets/images/hero.jpg" 
        width={windowWidth} 
        height={windowHeight} 
        alt="Hero background" 
      />
      <div className="overlay"></div>
      <h1 className={`${styles.hero_title} title_XL`}>La p&apos;tite Taverne</h1>
    </div>
  );
}