import { useEffect } from "react";
import { gsap } from "gsap";

// Custom Hook: fadeIn
export const useFadeIn = (
  target: HTMLElement | NodeList,
  duration: number = 1,
  delay: number = 0
) => {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";

    if (isBrowser) {
      gsap.fromTo(
        target,
        { opacity: 0 },
        { opacity: 1, duration, delay, ease: "power2.out" }
      );
    }
  }, [target, duration, delay]); // Dependencies to control the effect
};

// Custom Hook: slideDown
export const useSlideDown = (
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
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";

    if (isBrowser) {
      gsap.fromTo(
        target,
        { y: `-${distance}` },
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
          }
        }
      );
    }
  }, [target, trigger, start, end, distance, duration, delay, scrub, markers]);
};

// Custom Hook: slideInFromBottom
export const useSlideInFromBottom = (
  target: gsap.TweenTarget,
  duration: number = 1,
  delay: number = 0,
  distance: string = "100px",
  stagger: number = 0
) => {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";

    if (isBrowser) {
      gsap.to(target, { y: "0", duration, delay, stagger, ease: "power2.out" });
    }
  }, [target, duration, delay, distance, stagger]);
};

// Custom Hook: scrollReveal
export const useScrollReveal = (
  target: gsap.TweenTarget,
  trigger: string,
  start: string = "top bottom",
  end: string = "bottom 20%",
  scrub: boolean = false,
  delay: number = 0,
  markers: boolean = false
) => {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";

    if (isBrowser) {
      gsap.fromTo(
        target,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger,
            start,
            end,
            scrub,
            markers
          }
        }
      );
    }
  }, [target, trigger, start, end, scrub, delay, markers]);
};

// Custom Hook: killAllAnimations
export const useKillAllAnimations = () => {
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";

    if (isBrowser) {
      gsap.killTweensOf("*");
    }
  }, []);
};

// Custom Hook: createTimeline
// export const useCreateTimeline = () => {
//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });
//     return tl;
//   }, []);
// };
