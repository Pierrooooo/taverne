'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./nav.module.css";
import Link from "next/link";
import CopyToClipboard from "@/app/utils/copyToClipboard";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTestimonialsActive, setIsTestimonialsActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const testimonialsSection = document.querySelector('.testimonials');
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialsActive(true);
        } else {
          setIsTestimonialsActive(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (testimonialsSection) {
      observer.observe(testimonialsSection);
    }

    return () => {
      if (testimonialsSection) {
        observer.unobserve(testimonialsSection);
      }
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        isTestimonialsActive ? styles.active : ""
      }`}
    >
      <Link href={'/'}>
        <Image 
          src={'/assets/icons/logo.png'}
          alt=""
          width={50}
          height={50}
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/gallery'}>Gallery</Link>
        </li>
        <li>
          <Link href={'/menu'}>Menu</Link>
        </li>
      </ul>
      {/* <a href="tel:0101010101" className={styles.phone}>+33 0101010101</a> */}
      <div className={styles.phone}>
        <CopyToClipboard text="0101010101"/>
      </div>

      <button
        className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={styles.burgerMenu}>
        <div className={styles.transis}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul>
          <li>
            <Link href={'/gallery'}>Gallery</Link>
          </li>
          <li>
            <Link href={'/menu'}>Menu</Link>
          </li>
        </ul>
        <div className={styles.burger_phone}>
          <CopyToClipboard text="01010101101"/>
        </div>
      </div>
    </nav>
  );
}
