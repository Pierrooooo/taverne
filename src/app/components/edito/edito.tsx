import Image from 'next/image';
import { useEffect } from 'react';
import styles from './edito.module.css';
import { useSlideDown, useScrollReveal } from '@/app/animations/animationsgsap';

interface EditoProps {
    title: string;
    imageSrc: string;
    para: string;
    para_2?: string;
    para_3?: string;
    invert: boolean;
}

// Custom Hook to manage the animations
const useAnimations = () => {
  // Call the animation functions here
  useSlideDown(
    ".section_edito .anim_img_bg",
    ".section_edito .anim_img_bg",
    "top bottom",
    "bottom top",
    100,
  );

  useScrollReveal(".section_edito h2", ".section_edito");

  // Call the scroll reveal for each paragraph individually
  useScrollReveal("#para1", "#para1");
  useScrollReveal("#para2", "#para2");
  useScrollReveal("#para3", "#para3");
};

export default function Edito({ title, imageSrc, para, para_2, para_3, invert }: EditoProps): JSX.Element {
  // Call the custom hook at the top-level of the component
  useAnimations();

  return (
    <section className={`${styles.edito}${invert ? ` ${styles.invert}` : ''} section_edito container`}>

      <div className={styles.image_div}>
        <h2 className={`${styles.mob_title} title_XL`}>{title}</h2>
        <div className={styles.image_container}>
          <Image className='anim_img_bg' src={imageSrc} alt={title} width={900} height={900} />
        </div>
      </div>
      <div className={styles.content}>
        <h2 className={`${styles.title} title_XL`}>{title}</h2>
        <p id='para1' className={`${styles.text} para_s`}>{para}</p>
        <p id='para2' className={`${styles.text} para_s`}>{para_2}</p>
        <p id='para3' className={`${styles.text} para_s`}>{para_3}</p>
      </div>
    </section>
  );
}
