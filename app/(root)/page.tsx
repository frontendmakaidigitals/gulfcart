
import Hero from './sections/Hero';
import StatBand from './sections/StatBand';
import Currency from './sections/Currency';
import Leak from './sections/Leak';
import Levers from './sections/Levers';
import CheckoutShowcase from './sections/CheckoutShowcase';
import BuyerNetwork from './sections/BuyerNetwork';
import Fit from './sections/Fit';

import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';


export default function Page() {
  return (
    <main className="overflow-x-hidden bg-ink">
      <Hero />
      <StatBand />
      <Currency />
      <Leak />
      <Levers />
      <CheckoutShowcase />
      <BuyerNetwork />
      <Fit />
      
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />

    </main>
  );
}
