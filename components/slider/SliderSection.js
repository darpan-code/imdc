/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SliderSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Cilents</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="clients">
            <Splide
              options={{
                type: "loop",
                perPage: 5,
                perMove: 1,
                gap: ".5rem",
                arrows: false,
                pagination: false,
                autoplay: true,
                interval: 2000,
                lazyLoad: "nearby",
                breakpoints: {
                  767: { perPage: 3 },
                  576: { perPage: 2 },
                },
              }}
            >
              <SplideSlide>
                <SlideItem />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>

      <div className="white-space-50"></div>
    </>
  );
};

const SlideItem = () => {
  return (
    <div className="client-block">
      <a href="#" target="_blank" title="Logo">
        <img
          style={{ width: "144px" }}
          src="https://lmpixels.com/demo/breezycv/darkfw/1/img/clients/client-4.png"
          alt="Logo"
        />
      </a>
    </div>
  );
};

export default SliderSection;
