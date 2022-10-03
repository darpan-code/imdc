/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const TestimonialSection = () => {
  return (
    <>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="block-title">
            <h3>Testimonials</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className="testimonials">
            <Splide
              options={{
                type: "loop",
                perPage: 2,
                perMove: 1,
                gap: ".5rem",
                arrows: false,
                pagination: false,
                autoplay: true,
                interval: 2000,
                lazyLoad: "nearby",
                breakpoints: {
                  767: { perPage: 1 },
                },
              }}
            >
              <SplideSlide>
                <TestimonialItem />
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>

      <div className="white-space-50"></div>
    </>
  );
};

const TestimonialItem = () => {
  return (
    <div className="testimonial">
      <div className="img">
        <img
          src="https://lmpixels.com/demo/breezycv/darkfw/1/img/testimonials/testimonial-1.jpg"
          alt="Alex Smith"
        />
      </div>
      <div className="text">
        <p>
          Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor.
          Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo
          id ligula pellentesque, at vehicula dui ultrices.
        </p>
      </div>

      <div className="author-info">
        <h4 className="author">Julia Hickman</h4>
        <h5 className="company">Omni Source</h5>
        <div className="icon">
          <i className="fas fa-quote-right"></i>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
