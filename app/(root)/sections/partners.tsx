import { LogoMarquee } from "../components/partner-marquee";
const Partners = () => {
  return (
    <section className="">
      <div className="container max-w-4xl mb-6 mx-auto">
        <h2 className="text-secondary text-5xl text-center  font-semibold">
          Trusted by Brands{" "}
          <span className="text-primary">Across GCC</span>{" "}
        </h2>
      </div>
      <LogoMarquee />
    </section>
  );
};

export default Partners;
