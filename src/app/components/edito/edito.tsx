'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './edito.module.css';
import { slideDown, scrollReveal } from '@/app/animations/animationsgsap';

interface EditoProps {
    title: string;
    imageSrc: string;
    para: string;
    para_2?: string;
    para_3?: string;
    invert: boolean;
}

export default function Edito({ title, imageSrc, para, para_2, para_3, invert }: EditoProps): JSX.Element {

  useEffect(() => {
    slideDown(
      ".section_edito .anim_img_bg",
      ".section_edito .anim_img_bg",
      "top bottom",
      "bottom top",
      100,
    );

    scrollReveal(
        ".section_edito h2",
        ".section_edito",
        "top bottom",
        "bottom 20%",
        false,
        0,
    );

    const paraIds = ['para1', 'para2', 'para3'];
        paraIds.forEach((id) => {
            scrollReveal(
              `.section_edito #${id}`,
              `.section_edito #${id}`,
              "top bottom",
              "bottom 20%"
            );
        });
  }, []);

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
