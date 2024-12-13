'use client'

import styles from './visualStory.module.css';
import Image from "next/image";

export default function VisualStory(): JSX.Element {
    return (
        <section className={styles.visualstory}>
            <div className={styles.image}>
                <Image 
                    src={'/assets/images/chocolat.jpeg'}
                    alt=""
                    width={500}
                    height={500}
                />
            </div>
            <div className={styles.texts}>
                <p className={`${styles.texts_title} title`}>Des produits Frais</p>
                <p className={`${styles.texts_para} para_s`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque.</p>
                <p className={`${styles.texts_para} para_s`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.</p>
            </div>
            <div className={styles.image}>
                <Image 
                    src={'/assets/images/planche2.jpeg'}
                    alt=""
                    width={500}
                    height={500}
                />
            </div>

            <div className={styles.texts}>
                <p className={`${styles.texts_title} title`}>The Best Taste</p>
                <p className={`${styles.texts_para} para_s`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque.</p>
            </div>

            <div className={styles.texts}>
                <p className={`${styles.texts_para} para_s`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in  mi. </p>
                <p className={`${styles.texts_title} title`}>Titre</p>
                <p className={`${styles.texts_para} para_s`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque .</p>
            </div>
        </section>
    );
}