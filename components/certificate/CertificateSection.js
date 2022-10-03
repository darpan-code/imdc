/* eslint-disable @next/next/no-img-element */
const CertificateSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Certificates</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <CertificateItem />
        <CertificateItem />
      </div>
    </>
  );
};

const CertificateItem = () => {
  return (
    <div className="col-xs-12 col-sm-6">
      <div className="certificate-item clearfix">
        <div className="certi-logo">
          <img
            src="https://lmpixels.com/demo/breezycv/darkfw/1/img/clients/client-1.png"
            alt="logo"
          />
        </div>

        <div className="certi-content">
          <div className="certi-title">
            <h4>Psyhology of Intertnation Design</h4>
          </div>
          <div className="certi-id">
            <span>Membership ID: XXXX</span>
          </div>
          <div className="certi-date">
            <span>19 April 2018</span>
          </div>
          <div className="certi-company">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
