const ContactForm = () => {
  return (
    <>
      <form className="contact-form">
        <div className="controls two-columns">
          <div className="fields clearfix">
            <div className="left-column">
              <div className="form-group form-group-with-icon">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder=""
                  required="required"
                />
                <label>Full Name</label>
                <div className="form-control-border"></div>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group form-group-with-icon">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder=""
                  required="required"
                />
                <label>Email Address</label>
                <div className="form-control-border"></div>
                <div className="help-block with-errors"></div>
              </div>

              <div className="form-group form-group-with-icon">
                <input
                  id="form_subject"
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder=""
                  required="required"
                  data-error="Subject is required."
                />
                <label>Subject</label>
                <div className="form-control-border"></div>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="right-column">
              <div className="form-group form-group-with-icon">
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder=""
                  rows="8"
                  required="required"
                ></textarea>
                <label>Message</label>
                <div className="form-control-border"></div>
                <div className="help-block with-errors"></div>
              </div>
            </div>
          </div>

          <input
            type="submit"
            className="button btn-send"
            value="Send message"
          />
        </div>
      </form>
      <style jsx>{`
        .form-group {
          margin-bottom: 33px;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
