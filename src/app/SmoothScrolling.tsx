"use client";

import { useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';
import Lenis from 'lenis';

interface SmoothScrollingProps {
  children: React.ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1,
      infinite: false,
    });

    lenisRef.current = lenis;

    let lastScrollY = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleScroll = () => {
      const currentScrollY = lenis.scroll;

      if (currentScrollY > lastScrollY) {
        document.body.classList.add('scroll_down');
        document.body.classList.remove('scroll_up');
      } else if (currentScrollY < lastScrollY) {
        document.body.classList.add('scroll_up');
        document.body.classList.remove('scroll_down');
      }

      lastScrollY = currentScrollY;
    };

    lenis.on('scroll', handleScroll);

    return () => {
      lenis.destroy();
    };
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;

    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href') || '';

      if (href.startsWith('#') && lenisRef.current) {
        lenisRef.current.scrollTo(href);
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [isClient]);

  if (!isClient) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

export default SmoothScrolling;
