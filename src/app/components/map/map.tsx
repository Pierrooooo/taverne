'use client';

import { useEffect } from 'react';
import styles from './map.module.css';
import { useScrollReveal } from '@/app/animations/animationsgsap';
import MapLeaflet from '@/app/utils/MapLeaflet';

// Custom Hook to manage the animations
const useAnimations = () => {
  // Call each hook individually
  useScrollReveal(".section_map h2", ".section_map", "top bottom");

  // Call `useScrollReveal` for each paraId individually
  useScrollReveal(".section_map #para1", ".section_map #para1", "top bottom");
  useScrollReveal(".section_map #para2", ".section_map #para2", "top bottom");
  useScrollReveal(".section_map #para3", ".section_map #para3", "top bottom");
  useScrollReveal(".section_map #para4", ".section_map #para4", "top bottom");
  useScrollReveal(".section_map #para5", ".section_map #para5", "top bottom");
  useScrollReveal(".section_map #para6", ".section_map #para6", "top bottom");
  useScrollReveal(".section_map #para7", ".section_map #para7", "top bottom");
  useScrollReveal(".section_map #para8", ".section_map #para8", "top bottom");
};

export default function Map(): JSX.Element {
  // Call the custom hook at the top-level of the component
  useAnimations();

  return (
    <section className={`${styles.section_map} section_map container`}>
      <h2 className={`${styles.title} title_XL`}>Accès & Horaires</h2>
      <a id='para1' className={`${styles.location} para_s`} target='_blank' href="https://www.google.fr/maps/place/La+P'tite+Taverne/@48.9683424,2.1600307,14.36z/data=!4m10!1m2!2m1!1sla+pt'ite+tavern!3m6!1s0x47e661a0d6113b35:0x597b80010c1c8d95!8m2!3d48.9704529!4d2.1806255!15sChBsYSBwJ3RpdGUgdGF2ZXJuWhIiEGxhIHAgdGl0ZSB0YXZlcm6SARFmcmVuY2hfcmVzdGF1cmFudOABAA!16s%2Fg%2F11y9r4ljlz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
        21 Quai de Seine, 95530 <strong>La Frette-sur-Seine</strong>
      </a>
      <div className={styles.infos_map}>
        <div className={`${styles.hours} para_s`}>
          <span id='para2' className={styles.hours_line}>
            <span>Mar :</span>
            <span>17h - 23h00</span>
          </span>
          <span id='para3' className={styles.hours_line}>
            <span>Mer :</span>
            <span>17h - 23h00</span>
          </span>
          <span id='para4' className={styles.hours_line}>
            <span>Jeu :</span>
            <span>17h - 23h00</span>
          </span>
          <span id='para5' className={styles.hours_line}>
            <span>Ven :</span>
            <span>17h - 23h00</span>
          </span>
          <span id='para6' className={styles.hours_line}>
            <span>Sam :</span>
            <span>17h - 23h00</span>
          </span>
          <span id='para7' className={styles.hours_line}>
            <span>Dim :</span>
            <span>17h - 23h00</span>
          </span>
        </div>
        <div className={styles.map}>
          <MapLeaflet />
        </div>
      </div>
      <p id='para8' className={`${styles.text} para_s`}>
        Nous sommes ravis de vous accueillir dans notre restaurant ! Que ce soit pour un dîner entre amis, un repas en famille ou apéro entre collègues. Retrouvez-nous facilement grâce à la carte, et laissez-vous guider jusqu’à notre table pour une expérience culinaire mémorable. À très bientôt !
      </p>
    </section>
  );
}
