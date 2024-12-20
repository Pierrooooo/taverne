import { gsap } from "gsap";

if (typeof window !== "undefined") {
    gsap.registerPlugin();
}

export const fadeIn = (
    target: gsap.TweenTarget,
    duration: number = 1,
    delay: number = 0
) => {
    gsap.fromTo(
        target,
        { opacity: 0 },
        { opacity: 1, duration, delay, ease: "power2.out" }
    );
};

export const slideDown = (
    target: gsap.TweenTarget,
    trigger: string,
    start: string = "center bottom",
    end: string = "top center",
    distance: number = 200,
    duration: number = 1,
    delay: number = 0,
    scrub: number = 1,
    markers: boolean = false
  ) => {
    if (typeof window !== "undefined") {
      const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.fromTo(
        target,
        { y: `-${distance}`},
        {
          y: 0,
          duration,
          delay,
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub,
            markers
          },
        }
      );
    }
  };
  

export const slideInFromLeft = (
    target: gsap.TweenTarget,
    duration: number = 1,
    delay: number = 0,
    distance: string = "100px"
) => {
    gsap.fromTo(
        target,
        { x: `-${distance}`, opacity: 0 },
        { x: "0", opacity: 1, duration, delay, ease: "power2.out" }
    );
};

export const scaleUp = (
    target: gsap.TweenTarget,
    duration: number = 1,
    delay: number = 0
) => {
  gsap.fromTo(
    target,
    { scale: 0 },
    { scale: 1, duration, delay, ease: "back.out(1.7)" }
  );
};

export const scrollReveal = (
    target: gsap.TweenTarget,
    trigger: string,
    start: string = "top 80%",
    end: string = "bottom 20%",
    scrub: boolean = false
) => {
    if (typeof window !== "undefined") {
        const ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            target,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger,
                    start,
                    end,
                    scrub,
                },
            } 
        );
    }
};

export const killAllAnimations = () => {
  gsap.killTweensOf("*");
};

export const createTimeline = () => {
    const tl = gsap.timeline({ defaults: { 
        ease: "power2.out",
        duration: 1
    } 
});
  return tl;
};

export default {
  fadeIn,
  slideDown,
  slideInFromLeft,
  scaleUp,
  scrollReveal,
  killAllAnimations,
  createTimeline,
};
