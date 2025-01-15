'use client';

import Image from "next/image";
import Link from 'next/link';
import styles from './footer.module.css';
import CopyToClipboard from '@/app/utils/copyToClipboard';

import { useEffect } from "react";
import { useScrollReveal } from "@/app/animations/animationsgsap";

// Custom Hook to manage the animations
const useAnimations = () => {
  useScrollReveal("footer #title1", "footer #title1");
  useScrollReveal("footer #title2", "footer #title2");

  useScrollReveal("footer #footer_nav_li1", "footer #footer_nav_li1");
  useScrollReveal("footer #footer_nav_li2", "footer #footer_nav_li2");
  useScrollReveal("footer #footer_nav_li3", "footer #footer_nav_li3");

  useScrollReveal("footer #footer_contact_li1", "footer #footer_contact_li1");
  useScrollReveal("footer #footer_contact_li2", "footer #footer_contact_li2");
  useScrollReveal("footer #footer_contact_li3", "footer #footer_contact_li3");
  useScrollReveal("footer #footer_hours_li", "footer #footer_hours_li");
};

export default function Footer(): JSX.Element {
  // Call the custom hook at the top-level of the component
  useAnimations();

  return (
    <footer className={`${styles.footer} footer`}>
      <div className={`${styles.footer_infos} small_container`}>
        <div className={styles.footer_info}>
          <p id="title1" className="title">Navigation</p>
          <ul>
            <li id="footer_nav_li1">
              <Link href="/">Accueil</Link>
            </li>
            <li id="footer_nav_li2">
              <Link href="/menu">Menu</Link>
            </li>
            <li id="footer_nav_li3">
              <Link href="/gallery">Galerie</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_info}>
          <p id="title2" className="title">Contact</p>
          <ul>
            <li id="footer_contact_li1">
              <CopyToClipboard type="phone" text="09 79 39 11 01"/>
            </li>
            <li id="footer_contact_li2">
              <CopyToClipboard text="lerestautdehervé@gmail.com"/>
            </li>
            <li id="footer_contact_li3">
              <a target='_blank' href="https://www.google.fr/maps/place/La+P'tite+Taverne/@48.9683424,2.1600307,14.36z/data=!4m10!1m2!2m1!1sla+pt'ite+tavern!3m6!1s0x47e661a0d6113b35:0x597b80010c1c8d95!8m2!3d48.9704529!4d2.1806255!15sChBsYSBwJ3RpdGUgdGF2ZXJuWhIiEGxhIHAgdGl0ZSB0YXZlcm6SARFmcmVuY2hfcmVzdGF1cmFudOABAA!16s%2Fg%2F11y9r4ljlz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">21 Quai de Seine, 
                95530 La Frette-sur-Seine</a>
            </li>
            <li id="footer_hours_li">Ouvert du mardi au dimanche de 17h à 23h</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_image}>
        <Image
          height={300}
          width={1500}
          src="/assets/images/footer_title.png"
          alt="Restaurant's Title : La P'tite Taverne"
        />
      </div>
      <div className={styles.footer_bottom}>
        <p className={styles.footer_copyright}>Copyright © 2024</p>
        <Link href={`#hero`}>Back to Top</Link>
      </div>
    </footer>
  );
}
