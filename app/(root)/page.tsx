import Footer from "./footer/footer";
import Header from "./header/header";
import Pricing from "./sections/pricing";
import Calculator from "./sections/calculator";
import Reviews from "./sections/reviews";
import ContactForm from "./sections/contact-form";
import SupportedCountries from "./sections/supported-countries";
import Stats from "./sections/stats";
import PlatformFeatures from "./sections/platform-features";
import Metrics from "./sections/metrics";
import Partners from "./sections/partners";
import OurSolution from "./sections/our-solution";
import Hero from "./sections/hero";
import ShopifyProblem from "./sections/shopify-problem";
import GulfCartBuyerNetwork from "./sections/buyernetwork";
const Page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <ShopifyProblem />
      <OurSolution />
      <PlatformFeatures />
      <Metrics />
      <Stats />
      <GulfCartBuyerNetwork />
      <SupportedCountries />
      <Reviews />
      <Pricing />
      <Calculator />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Page;
