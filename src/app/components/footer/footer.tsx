'use client'

import Image from "next/image";
import Link from 'next/link';
import styles from './footer.module.css';
import { useState, useEffect } from 'react';

export default function Footer(): JSX.Element {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [windowHeight, setWindowHeight] = useState<number>(0);

    useEffect(() => {
      const handleResize = (): void => {
        if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth * 0.8);
          setWindowHeight(window.innerHeight * 0.4);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_infos}>
                <div className={styles.footer_info}>
                    <p className="title">Navigation</p>
                    <ul>
                        <li>
                            <Link href="#">Home</Link>
                        </li>
                        <li>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link href="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_info}>
                    <p className="title">Contact</p>
                    <ul>
                        <li>
                            <p>+33 0101010101</p>
                        </li>
                        <li>
                            <p>lerestautdehervé@gmail.com</p>
                        </li>
                        <li>
                            <p>48 Bis Quai de Seine, 
                            95530 La Frette-sur-Seine</p>
                        </li>
                    </ul>
                </div>

            </div>
            {/* <p className={styles.test_text}>La p&apos;tite Taverne</p> */}
            <div className={styles.footer_image}>
                <img
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