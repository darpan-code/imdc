import AboutSection from "../components/about/about";
import ServicesSection from "../components/services/ServicesSection";
import TestimonialSection from "../components/testimonial/TestimonialSection";

const AboutPage = () => {
  return (
    <>
      <section className="animated-section section-active">
        <AboutSection />
        <ServicesSection />
        <TestimonialSection />
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
