import { useState } from 'react';
import Image from 'next/image';
import styles from './testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Testimonial {
    id: string;
    text: string;
    name: string;
    profession: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue habitant accumsan, parturient orci ac etiam congugue habitant accumsan, parturient orci ac etiam congue mi.",
        name: "John Doe",
        profession: "Blogger",
        imageUrl: "/assets/images/avatar.jpg"
    },
    {
        id: '2',
        text: "Pellentesque ornare nunc nisl. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Jane Smith",
        profession: "Designer",
        imageUrl: "/assets/images/avatar.jpg"
    },
    {
        id: '3',
        text: "Consectetur adipiscing elit. Quisque fermentum malesuada nisi, ac viverra urna sollicitudin in.",
        name: "Alex Johnson",
        profession: "Photographer",
        imageUrl: "/assets/images/avatar.jpg"
    }
];

export default function Testimonials(): JSX.Element {
    const [currentTestimonialId, setCurrentTestimonialId] = useState<string>(testimonials[0].id);

    const handleSlideChange = (swiper: any) => {
        const activeTestimonial = testimonials[swiper.realIndex];
        setCurrentTestimonialId(activeTestimonial.id);
    };

    return (
        <section className={styles.testimonials}>
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
                            <div className={styles.testimonial_infos}>
                                <Image
                                    src={testimonial.imageUrl}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className={styles.testimonial_image}
                                />
                                <div>
                                    <p className={styles.testimonial_name}>{testimonial.name}</p>
                                    <p className={styles.testimonial_profession}>{testimonial.profession}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className={styles.testimonial_swiper_navigation}>
                    <div className={`${styles.swiperButtonPrevCustom} swiper-button-prev-custom`}>
                        <Image src="/assets/icons/swiper-prev.svg" alt="Previous" width={24} height={24} />
                    </div>
                    <div className={styles.slide_id_text}>
                        {parseFloat(currentTestimonialId) > 9 ? currentTestimonialId : '0' + currentTestimonialId}
                    </div>
                    <div className={`${styles.swiperButtonNextCustom} swiper-button-next-custom`}>
                        <Image src="/assets/icons/swiper-next.svg" alt="Next" width={24} height={24} />
                    </div>
                </div>
            </Swiper>
        </section>
    );
}
