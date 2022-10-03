/* eslint-disable @next/next/no-img-element */
const CertificateSection = () => {
  return (
    <>
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="block-title">
            <h3>Certificates</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <CertificateItem />
        <CertificateItem />
      </div>
    </>
  );
};

const CertificateItem = () => {
  return (
    <div class="col-xs-12 col-sm-6">
      <div class="certificate-item clearfix">
        <div class="certi-logo">
          <img
            src="https://lmpixels.com/demo/breezycv/darkfw/1/img/clients/client-1.png"
            alt="logo"
          />
        </div>

        <div class="certi-content">
          <div class="certi-title">
            <h4>Psyhology of Intertnation Design</h4>
          </div>
          <div class="certi-id">
            <span>Membership ID: XXXX</span>
          </div>
          <div class="certi-date">
            <span>19 April 2018</span>
          </div>
          <div class="certi-company">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
