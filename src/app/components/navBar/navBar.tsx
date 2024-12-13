'use client'

import { useState } from "react";
import Image from "next/image";
import styles from "./nav.module.css";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
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
      <a href="tel:0101010101" className={styles.phone}>+33 0101010101</a>

      <button className={`${styles.burger} ${isMenuOpen ? styles.active : ''}`} onClick={toggleMenu}>
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
      </div>
    </nav>
  );
}
