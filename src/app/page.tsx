'use client';

import Hero from './components/hero/hero';
import Quote from './components/quote/quote';
import GridLayout from './oui';
import Testimonials from './components/testimonials/testimonials';
import Map from './components/map/map';
import VisualStory from './components/visualStory/visualStory';
import Edito from './components/edito/edito';

export default function Home() {
  return (
    <main>
      <Hero
        title="La P'tite Taverne"
        imageSrc="/assets/images/hero.jpeg"
      />
      <VisualStory />
      <Edito 
        title='Hervé Martin'
        imageSrc='/assets/images/herve.jpeg'
        para='Diplômé de l’École Hôtelière Médéric (Paris 17e) en 1986, je cumule 40 ans de métier au service de la bistronomie.'
        para_2='Ma carrière débute avec l’ouverture de "Le Bouquet Garnier", suivi par "La Ptite Tavern", deux adresses emblématiques où j ai su marier tradition et créativité.'
        para_3='Reconnu pour mon savoir-faire et ma passion des produits frais, je continue de séduire les papilles avec une cuisine française traditionnelle et généreuse.'
        invert={true}
      />
      <Quote />
      <Map />
      <Testimonials />
    </main>
  );
}
