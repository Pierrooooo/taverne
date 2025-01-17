import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { scrollReveal } from '@/app/animations/animationsgsap';

interface Testimonial {
    id: string;
    text: string;
    name: string;
    profession?: string;
    imageUrl?: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        text: "Une très bonne soirée passé dans une petite taverne sympathique et qui s'installe progressivement après plusieurs passages et plusieurs plats essayer aucune déception pour le moment, je recommande fortement!!  Faites du bouche à oreille pour cette belle petite adresse !",
        name: "Max",
        imageUrl: "/assets/images/max.png"
    },
    {
        id: '2',
        text: "Le restaurant est vraiment sympa, le restaurateur est super attentif et à l’écoute. La nourriture est délicieuse, chaque plat est bien préparé et les saveurs sont parfaitement équilibrées. Le service est rapide et agréable, ce qui rend l’expérience encore plus agréable. C’est un endroit que je recommande sans hésiter pour un bon repas.",
        name: "Rose",
        profession: "Guide local",
        imageUrl: "/assets/images/rose.png"
    },
    {
        id: '3',
        text: "Excellente expérience à La Ptite ! Taverne Cuisine de qualité fait maison et de très bon vins. Je recommande fortement. Enfin un restaurant de qualité à la Frette sur Seine ",
        name: "Paul",
        profession: "Guide local",
        imageUrl: "/assets/images/paul.png"
    },
    // {
    //     id: '4',
    //     text: "Acceuil sympa, cusine délicieuse, rapport Qualité/prix tt a fait correct. La fine gueule que je suis vous recommande ce lieu",
    //     name:"Marie Anne Cantin",
    //     profession: "Guide local"
    // }
];

export default function Testimonials(): JSX.Element {

    useEffect(() => {
    
        scrollReveal(
            ".section_testimonials p.para",
            ".section_testimonials"
        );

        scrollReveal(
            ".section_testimonials .testimonial_info",
            ".section_testimonials .testimonial_info"
        );

        scrollReveal(
            ".section_testimonials .testimonial_swiper_nav",
            ".section_testimonials .testimonial_swiper_nav"
        );

  }, []);
    const [currentTestimonialId, setCurrentTestimonialId] = useState<string>(testimonials[0].id);

    const handleSlideChange = (swiper: any) => {
        const activeTestimonial = testimonials[swiper.realIndex];
        setCurrentTestimonialId(activeTestimonial.id);
    };

    return (
        <section data-nav="gallery" className={`${styles.testimonials} section_testimonials small_container`}>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom'
                }}
                onSlideChange={handleSlideChange}
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id} className={styles.slide}>
                        <div className={styles.testimonial}>
                            <p className={`${styles.testimonial_text} para`}>
                                “ {testimonial.text} ”
                            </p>
                            <div className={`${styles.testimonial_infos} testimonial_info para_s`}>
                                {testimonial.imageUrl && (
                                    <Image
                                        src={testimonial.imageUrl}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className={styles.testimonial_image}
                                    />
                                )}
                                <div>
                                    <p className={styles.testimonial_name}>{testimonial.name}</p>
                                    {testimonial.profession && (
                                        <p className={styles.testimonial_profession}>{testimonial.profession}</p>
                                    )}

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className={`${styles.testimonial_swiper_navigation} testimonial_swiper_nav`}>
                    <div className={`${styles.swiperButtonPrevCustom} swiper-button-prev-custom`}>
                        <Image src="/assets/icons/swiper-prev.svg" alt="Previous" width={24} height={24} />
                    </div>
                    <p className={styles.slide_id_text}>
                        <span>
                        {parseFloat(currentTestimonialId) > 9 ? currentTestimonialId : '0' + currentTestimonialId}
                        </span>
                        <span> / </span>
                        <span>
                        {testimonials.length > 9 ? testimonials.length : '0' + testimonials.length}</span>
                    </p>
                    <div className={`${styles.swiperButtonNextCustom} swiper-button-next-custom`}>
                        <Image src="/assets/icons/swiper-next.svg" alt="Next" width={24} height={24} />
                    </div>
                </div>
            </Swiper>
        </section>
    );
}
