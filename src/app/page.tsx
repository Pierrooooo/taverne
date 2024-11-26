'use client'

import Hero from "./hero.tsx/hero";
import NavBar from "./components/navBar/navBar";
import Quote from "./components/quote/quote";
import Footer from "./components/footer/footer";
import GridLayout from "./oui";
import Testimonials from "./components/testimonials/testimonials";
import Map from "./components/map/map";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Map/>
      <Testimonials/>
      <Quote />
      <Footer />
      <GridLayout/>
    </main>
  );
}
