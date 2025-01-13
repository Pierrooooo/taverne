'use client'

import styles from './visualStory.module.css';
import Image from "next/image";
import { useEffect } from 'react';
import { slideDown, scrollReveal } from '@/app/animations/animationsgsap';

export default function VisualStory(): SX.Element {

    useEffect(() => {
        slideDown(
            ".section_visualstory .anim_img_bg",
            ".section_visualstory",
            "top bottom",
            "bottom top",
            100,
        );

        scrollReveal(
            ".section_visualstory h2",
            ".section_visualstory"
        );

        const titleIds = ['title1', 'title2', 'title3'];
        titleIds.forEach((id) => {
            scrollReveal(
                `.section_visualstory #${id}`,
                `.section_visualstory #${id}`
            );
        });

        const paraIds = ['para1', 'para2', 'para3', 'para4', 'para5', 'para6'];
        paraIds.forEach((id) => {
            scrollReveal(
                `.section_visualstory #${id}`,
                `.section_visualstory #${id}`
            );
        });
    }, []);

    return (
        <section className={`${styles.visualstory} section_visualstory container`}>
            <h2 className={`${styles.section_title} title_XL`}>Restaurant - La Frette</h2>
            <div className={styles.visual_story_grid}>
                <div className={styles.image}>
                    <Image 
                        src={'/assets/images/chocolat.jpg'}
                        className='anim_img_bg'
                        alt="Mie cuit au chocolat"
                        width={500}
                        height={500}
                    />
                </div>
                <div className={styles.texts}>
                    <p id="title1" className={`${styles.texts_title} title`}>Des produits frais</p>
                    <p id="para1" className={`${styles.texts_para} para_s`}>
                        Nous sélectionnons nos ingrédients avec soin au marché Debussy à Sartrouville. 
                        Chaque plat est préparé avec des produits de saison, garantissant fraîcheur et saveurs authentiques dans toutes vos assiettes.
                    </p>
                    <p id="para2" className={`${styles.texts_para} para_s`}>
                        Notre engagement envers la qualité des produits reflète notre volonté de proposer une cuisine qui respecte le goût et lorigine des aliments, pour une expérience culinaire incomparable.
                    </p>
                </div>
                <div className={styles.image}>
                    <Image 
                        src={'/assets/images/planche2.jpg'}
                        alt="Planche de charcuterie"
                        className='anim_img_bg'
                        width={500}
                        height={500}
                    />
                </div>

                <div className={styles.texts}>
                    <p id="title2" className={`${styles.texts_title} title`}>Tradition française</p>
                    <p id="para3" className={`${styles.texts_para} para_s`}>
                        Notre carte rend hommage à la richesse de la gastronomie française. Chaque recette célèbre les saveurs du terroir, 
                        mêlant classiques intemporels et créations modernes. Nous proposons également de généreuses planches de charcuterie 
                        et de fromages sélectionnés avec soin pour accompagner un apéritif copieux.
                    </p>
                    <p id="para4" className={`${styles.texts_para} para_s`}>
                        C’est dans cet esprit que nous vous invitons à redécouvrir les plaisirs de la table, dans une ambiance conviviale et élégante.
                    </p>
                </div>

                <div className={styles.texts}>
                    <p id="para5" className={`${styles.texts_para} para_s`}>Nous sommes heureux de vous accueillir depuis octobre 2024.</p>
                    <p id="title3" className={`${styles.texts_title} title`}>La Frette</p>
                    <p id="para6" className={`${styles.texts_para} para_s`}>
                        Situé à La Frette, notre restaurant vous invite à un voyage culinaire dans un cadre chaleureux et authentique. 
                        Entre esprit de taverne moderne et ambiance cosy, nous avons pensé chaque détail pour que vous vous sentiez comme chez vous, 
                        tout en profitant de plats savoureux.
                    </p>
                </div>
            </div>
        </section>
    );
}
