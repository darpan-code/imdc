import AboutSection from "../components/about/about";
import CounterSection from "../components/counter/CounterSection";
import ServicesSection from "../components/services/ServicesSection";
import SliderSection from "../components/slider/SliderSection";
import TestimonialSection from "../components/testimonial/TestimonialSection";

const AboutPage = () => {
  return (
    <>
      <section className="animated-section section-active">
        <AboutSection />
        <ServicesSection />
        <TestimonialSection />
        <SliderSection />
        <CounterSection />
      </section>
      <style jsx>{`
        @media (max-width: 768px) {
          .animated-section {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutPage;
