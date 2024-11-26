"use client";

import { useEffect } from 'react';
import { ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

interface SmoothScrollingProps {
  children: ReactNode;
}

function SmoothScrolling({ children }: SmoothScrollingProps) {
  const lenis = useLenis();

  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href') || '';
      
      if (href.startsWith('#') && lenis) {
        lenis.scrollTo(href);
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
  }, [lenis]);

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
