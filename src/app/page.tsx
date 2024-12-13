'use client';

import Hero from './components/hero/hero';
import NavBar from './components/navBar/navBar';
import Quote from './components/quote/quote';
import Footer from './components/footer/footer';
import GridLayout from './oui';
import Testimonials from './components/testimonials/testimonials';
import Map from './components/map/map';
import VisualStory from './components/visualStory/visualStory';
import Edito from './components/edito/edito';

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero
        title="La P'tite Taverne"
        imageSrc="/assets/images/hero.jpg"
      />
      <Edito 
      title='Edito'
      imageSrc='/assets/images/hero.jpg'
      para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at similique cupiditate ratione hic vitae quibusdam ut nihil nam architecto minima reiciendis impedit repellendus, ducimus optio voluptate, quas labore consequntur!'
      invert={true}
      />
      <VisualStory />
      {/* Mettre en valeur RESTAURANT LA FRETTE */}
      {/* <Map /> */}
      <Testimonials />
      <Quote />
      <Footer />
      <GridLayout />
    </main>
  );
}
