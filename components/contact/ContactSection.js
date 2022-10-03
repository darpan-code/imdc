import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <>
      <section className="animated-section section-active">
        <div className="page-title">
          <h2>Contact</h2>
        </div>

        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="lm-info-block gray-default">
                <i className="lnr lnr-map-marker"></i>
                <h4>San Francisco</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <i className="lnr lnr-phone-handset"></i>
                <h4>415-832-2000</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <i className="lnr lnr-envelope"></i>
                <h4>
                  <a
                    href="https://lmpixels.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="c2a3aea7ba82a7baa3afb2aea7eca1adaf"
                  >
                    [email&#160;protected]
                  </a>
                </h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>

              <div className="lm-info-block gray-default">
                <i className="lnr lnr-checkmark-circle"></i>
                <h4>Freelance Available</h4>
                <span className="lm-info-block-value"></span>
                <span className="lm-info-block-text"></span>
              </div>
            </div>

            <div className="col-xs-12 col-sm-8">
              <div className="block-title">
                <h3>
                  How Can I <span>Help You?</span>
                </h3>
              </div>
              <ContactForm />
              <div className="map mt-2">
                <div className="lmpixels-map">
                  <iframe
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?q=San%20Francisco%2C%20S601%20Townsend%20Street%2C%20California%2C%20USA&amp;amp;t=m&amp;amp;z=16&amp;amp;output=embed&amp;amp;iwloc=near&amp;output=embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 768px) {
          .animated-section {
            padding: 30px;
          }
        }
        .lmpixels-map iframe {
          height: 160px;
        }
        .lm-info-block {
          margin-bottom: 28px;
        }
      `}</style>
    </>
  );
};

export default ContactSection;
