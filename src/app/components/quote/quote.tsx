'use client'

import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from './quote.module.css';
import { slideDown } from "@/app/animations/animationsgsap";

export default function Quote(): JSX.Element {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);
    
    useEffect(() => {
      const handleResize = (): void => {
        if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth);
          setWindowHeight(window.innerHeight * 0.4);
        }
      };

      slideDown(
        ".section_quote .anim_img_bg",
        ".section_quote",
        "top bottom",
        "bottom top",
        100
      );
  
      handleResize();

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }
    }, []);

    return (
        <section className={`${styles.quote} section_quote`}>
            <Image 
                className={`${styles.quote_bgimage} anim_img_bg`} 
                src="/assets/images/hero.jpeg" 
                width={windowWidth} 
                height={windowHeight} 
                alt="Hero background" 
            />
            <div className="overlay"></div>
            <div className="small_container">
              <p className={`para`}>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, parturient orci ac etiam congue mi.</p>
            </div>
        </section>
    );
}