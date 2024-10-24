
import { useState, useRef } from "react";
import logo1 from "../assets/img/img19.png";
import logo2 from "../assets/img/img20.png";
import logo3 from "../assets/img/img21.png";
import logo4 from "../assets/img/img22.png";
import logo5 from "../assets/img/Rectangle1.png";
import logo6 from "../assets/img/Rectangle2.png";
import logo7 from "../assets/img/Rectangle3.png";
import logo8 from "../assets/img/Rectangle4.png";
import leftArrow from "../assets/img/Arrow1.png";
import rightArrow from "../assets/img/Arrow2.png";

const BrandLogos = () => {
  const [logoImages] = useState([
    { image: logo1, id: 1 },
    { image: logo2, id: 2 },
    { image: logo3, id: 3 },
    { image: logo4, id: 4 },
    { image: logo5, id: 5 },
    { image: logo6, id: 6 },
    { image: logo7, id: 7 },
    { image: logo8, id: 8 },
  ]);

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 350;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 350;
    }
  };

  return (
    <div className="logos">
      <div className="content-tabs container-fluid outerLogos">
        <div className="innerLogos">
          <div className="d-flex logoImgs" id="slider" ref={sliderRef}>
            {logoImages.map((logo) => (
              <div
                className="col-6 col-md-3 col-lg-3 col-xl-3 col-xxl-3"
                key={logo.id}
              >
                <div className="card justify-content-center mx-2">
                  <img src={logo.image} alt={`Logo ${logo.id}`} className="img-fluid" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center pt-4">
          <button
            className="rounded-circle mx-3"
            onClick={slideLeft}
            type="button"
            aria-label="Slide Left"
          >
            <img src={leftArrow} alt="Left Arrow" className="img-fluid" />
          </button>
          <button
            className="rounded-circle mx-3"
            onClick={slideRight}
            type="button"
            aria-label="Slide Right"
          >
            <img src={rightArrow} alt="Right Arrow" className="img-fluid" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
