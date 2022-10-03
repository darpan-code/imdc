/* eslint-disable @next/next/no-img-element */
const GallerySection = () => {
  return (
    <>
      <section className="animated-section section-active">
        <div className="page-title">
          <h2>Portfolio</h2>
        </div>

        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="portfolio-content">
                <div className="portfolio-grid three-columns">
                  <GalleryItem />
                  <GalleryItem />
                  <GalleryItem />
                  <GalleryItem />
                  <GalleryItem />
                  <GalleryItem />
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
      `}</style>
    </>
  );
};

const GalleryItem = () => {
  return (
    <figure className="item lbaudio">
      <div className="portfolio-item-img">
        <img
          src="https://lmpixels.com/demo/breezycv/darkfw/1/img/portfolio/1.jpg"
          alt="SoundCloud Audio"
          title=""
        />
      </div>

      <i className="fa fa-volume-up"></i>
      <h4 className="name">SoundCloud Audio</h4>
      <span className="category">SoundCloud</span>
    </figure>
  );
};

export default GallerySection;
