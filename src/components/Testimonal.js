

import { useState, useRef } from "react";
import img1 from "../assets/img/Rectangle 16.png";
import img2 from "../assets/img/img17.png";
import img3 from "../assets/img/img18.png";
import img4 from "../assets/img/Group 3.png";
import img5 from "../assets/img/img16.png";
import arrow from "../assets/img/Arrow1.png";
import arrow1 from "../assets/img/Arrow2.png";

const Testimonials = () => {
  const [testmonCards] = useState([
    {
      image: img1,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 1,
    },
    {
      image: img2,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 2,
    },
    {
      image: img3,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 3,
    },
    {
      image: img2,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 4,
    },
    {
      image: img5,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 5,
    },
    {
      image: img1,
      image2: img4,
      title: "Jane Doe",
      title2: "Company Name",
      title3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      id: 6,
    },
  ]);

  // Use useRef to reference the slider element
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
    <div className="testmonial">
      <div className="container-fluid outerTestmonial">
        <div className="row innerTestmonial">
          <div className="col-lg-4 testimonialItem">
            <h2 className="htwo">Client Testimonials</h2>
            <p className="po">
              We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.
            </p>
            <div className="bbt d-flex p-4 pt-1">
              <button
                className="tabs active-tabs btn rounded-circle border-2 border border-light mx-3"
                onClick={slideLeft}
                type="button"
                aria-label="Left"
              >
                <img src={arrow1} alt="Arrow left" className="img-fluid" />
              </button>
              <button
                className="tabs active-tabs rounded-circle border border-2 border-light btn mx-3"
                onClick={slideRight}
                type="button"
                aria-label="Right"
              >
                <img src={arrow} alt="Arrow right" className="img-fluid" />
              </button>
            </div>
          </div>

          <div className="col-lg-8 testimonialItem">
            <div id="slider" ref={sliderRef} className="slider-container">
              {testmonCards.map((testmony) => (
                <div key={testmony.id} className="card-container">
                  <div className="card mx-3">
                    <img src={testmony.image} alt="" className="img-fluid" />
                    <img
                      src={testmony.image2}
                      alt=""
                      className="img-fluid im2 commas rounded-circle"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{testmony.title}</h5>
                      <h6>{testmony.title2}</h6>
                      <p className="card-text">{testmony.title3}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
