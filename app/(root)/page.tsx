import TopBar from './header/TopBar';
import Nav from './header/Nav';
import Hero from './sections/Hero';
import StatBand from './sections/StatBand';
import Currency from './sections/Currency';
import Leak from './sections/Leak';
import Levers from './sections/Levers';
import CheckoutShowcase from './sections/CheckoutShowcase';
import BuyerNetwork from './sections/BuyerNetwork';
import Fit from './sections/Fit';
import Dashboard from './sections/Dashboard';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Faq from './sections/Faq';
import FinalCta from './sections/FinalCta';
import Footer from './footer/Footer';

export default function Page() {
  return (
    <main style={{ background: '#08090C', overflowX: 'hidden' }}>
      <TopBar />
      <Nav />
      <Hero />
      <StatBand />
      <Currency />
      <Leak />
      <Levers />
      <CheckoutShowcase />
      <BuyerNetwork />
      <Fit />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
