'use client'

import Image from "next/image";
import Link from 'next/link';
import styles from './footer.module.css';
import CopyToClipboard from "@/app/utils/copyToClipboard";

export default function Footer(): JSX.Element {

    return (
        <footer className={styles.footer}>
            <div className={styles.footer_infos}>
                <div className={styles.footer_info}>
                    <p className="title">Navigation</p>
                    <ul>
                        <li>
                            <Link href="/">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link href="/gallery">Gallerie</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_info}>
                    <p className="title">Contact</p>
                    <ul>
                        <li>
                            <CopyToClipboard type="phone" text="09 79 39 11 01"/>
                        </li>
                        <li>
                            <CopyToClipboard text="lerestautdehervé@gmail.com"/>
                        </li>
                        <li>
                            <a target='_blank' href="https://www.google.fr/maps/place/La+P'tite+Taverne/@48.9683424,2.1600307,14.36z/data=!4m10!1m2!2m1!1sla+pt'ite+tavern!3m6!1s0x47e661a0d6113b35:0x597b80010c1c8d95!8m2!3d48.9704529!4d2.1806255!15sChBsYSBwJ3RpdGUgdGF2ZXJuWhIiEGxhIHAgdGl0ZSB0YXZlcm6SARFmcmVuY2hfcmVzdGF1cmFudOABAA!16s%2Fg%2F11y9r4ljlz?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">21 Quai de Seine, 
                            95530 La Frette-sur-Seine</a>
                        </li>
                    </ul>
                </div>

            </div>
            {/* <p className={styles.test_text}>La p&apos;tite Taverne</p> */}
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