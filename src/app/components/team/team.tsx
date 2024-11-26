'use client'

import styles from './team.module.css';
import Image from 'next/image';

export default function Team(): JSX.Element {
    return (
        <section className={styles.team}>
            <div className={styles.team_employe}>
                <h3 className={styles.team_employe_role}>Accueil & Service</h3>
                <p className={styles.team_employe_name}>Carson Huhg</p>
                <div className={styles.team_employe_moreinfo}>
                    <Image 
                        className={styles.team_employe_image} 
                        src="/assets/images/team.jpg" 
                        width="800" 
                        height="860" 
                        alt="" 
                    />
                    <p className={styles.team_employe_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. </p>
                </div>
            </div>
            
        </section>
    );
}