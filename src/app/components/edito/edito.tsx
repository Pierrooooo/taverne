'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './edito.module.css';

interface EditoProps {
    title: string;
    imageSrc: string;
    para: string;
    invert: boolean;
}

export default function Edito({ title, imageSrc, para, invert }: EditoProps): JSX.Element {
  return (
    <section className={`${styles.edito}${invert ? ` ${styles.invert}` : ''}`}>

      <div className={styles.image_div}>
        <h2 className={`${styles.mob_title} title_XL`}>{title}</h2>
        <Image src={imageSrc} alt={title} width={900} height={900} />
      </div>
      <div className={styles.content}>
        <h2 className={`${styles.title} title_XL`}>{title}</h2>
        <p className={`${styles.text} para_s`}>{para}</p>
      </div>
    </section>
  );
}
