'use client'

import Image from "next/image";
import styles from "./nav.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
        <Image 
            src={'/assets/icons/logo.webp'}
            alt=""
            width={50}
            height={50}
        />
        <ul className={styles.links}>
          <li>
            <Link href={'/gallery'}>Gallery</Link>
          </li>
          <li>
            <Link href={'/menu'}>Menu</Link>
          </li>
        </ul>
        
    </nav>
  );
}
