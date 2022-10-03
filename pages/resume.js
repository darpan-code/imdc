import CareerSection from "../components/career/CareerSection";
import CertificateSection from "../components/certificate/CertificateSection";
import SkillsSection from "../components/skill/SkillsSection";

const ResumePage = () => {
  return (
    <>
      <section className="animated-section section-active">
        <div className="page-title">
          <h2>Resume</h2>
        </div>

        <div className="section-content">
          <div className="row">
            <CareerSection />
            <SkillsSection />
            <CertificateSection />
          </div>
        </div>
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

export default ResumePage;
