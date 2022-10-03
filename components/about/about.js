const AboutSection = () => {
  return (
    <>
      <div className="page-title">
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-7">
          <p>
            Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue
            elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex
            justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae
            hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum
            condimentum dictum et vel massa. Ut in imperdiet dolor, vel
            consectetur dui.
          </p>
        </div>

        <div className="col-xs-12 col-sm-5">
          <div className="info-list">
            <ul>
              <li>
                <span className="title">Age</span>
                <span className="value">32</span>
              </li>

              <li>
                <span className="title">Residence</span>
                <span className="value">USA</span>
              </li>

              <li>
                <span className="title">Address</span>
                <span className="value">88 Some Street, Some Town</span>
              </li>

              <li>
                <span className="title">e-mail</span>
                <span className="value">
                  <a
                    href="https://lmpixels.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="dfbab2beb6b39fbaa7beb2afb3baf1bcb0b2"
                  >
                    [email&#160;protected]
                  </a>
                </span>
              </li>

              <li>
                <span className="title">Phone</span>
                <span className="value">+0123 123 456 789</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="white-space-30"></div>
    </>
  );
};

export default AboutSection;
