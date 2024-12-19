'use client';

import { useState, useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import NavBar from '../components/navBar/navBar';
import styles from './page.module.css';

export default function FourOhFour() {
  return (
    <main>
      <NavBar />
      <Hero title="Error 404" imageSrc="/assets/images/hero.jpg" />
      <Footer />
    </main>
  );
}
