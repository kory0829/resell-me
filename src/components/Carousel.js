
import { useState } from "react";
import caseImg1 from "../assets/img/img11.png";
import caseImg2 from "../assets/img/img12.png";
import caseImg3 from "../assets/img/img13.png";
import caseImg4 from "../assets/img/img14.png";
import caseImg5 from "../assets/img/img15.png";
import leftArrow from "../assets/img/Group 74.svg";
import rightArrow from "../assets/img/Group 75.png";

const ReSellCases = () => {
  const sectionTitle = {
    header: "Resellme’s Use Cases",
  };

  // State to track carousel scroll and the visibility of the fifth card
  const [showFifthCard, setShowFifthCard] = useState(false);

  const [useCaseCards] = useState([
    {
      img: caseImg1,
      title: " Web Development Freelancers",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      buttonLabel: "READ MORE",
      id: 1,
    },
    {
      img: caseImg2,
      title: " Small Housing & Domain Registration Companies",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      buttonLabel: "READ MORE",
      id: 2,
    },
    {
      img: caseImg3,
      title: " Company Registries",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      buttonLabel: "READ MORE",
      id: 3,
    },
    {
      img: caseImg4,
      title: " Small Digital Agencies",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      buttonLabel: "READ MORE",
      id: 4,
    },
    {
      img: caseImg5,
      title: " Other",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      buttonLabel: "READ MORE",
      id: 5,
    },
  ]);

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 350;
    setShowFifthCard(true);
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 350;
    setShowFifthCard(true);
  };

  return (
    <div className="reCases">
      <div className="container-fluid outerReCases">
        <h2 className="pb-3 pt-5">{sectionTitle.header}</h2>
        <div className="d-flex innerReCases" id="slider">
          {useCaseCards.slice(0, 4).map((card) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 reCasesItems"
              key={card.id}>
              <div className="card">
                <div className="card-body">
                  <div className="pb-3">
                    <img src={card.img} alt={`Use Case ${card.id}`} className="img-fluid devimg" />
                  </div>
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
              <button className="btn">{card.buttonLabel}</button>
            </div>
          ))}

          {/* Conditionally render the fifth card based on carousel movement */}
          {showFifthCard && (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3 reCasesItems"
              key={useCaseCards[4].id}>
              <div className="card">
                <div className="card-body">
                  <div className="pb-3">
                    <img src={useCaseCards[4].img} alt="Use Case 5" className="img-fluid" />
                  </div>
                  <h5 className="card-title">{useCaseCards[4].title}</h5>
                  <p className="card-text">{useCaseCards[4].description}</p>
                </div>
              </div>
              <button className="btn">{useCaseCards[4].buttonLabel}</button>
            </div>
          )}
        </div>
      </div>

      {/* Carousel navigation buttons */}
      <div className="buttons text-end p-5 pt-1">
        <button className="btn rounded-circle" onClick={slideLeft}>
          <img src={leftArrow} alt="Slide Left" className="img-fluid" />
        </button>
        <button className="btn rounded-circle" onClick={slideRight}>
          <img src={rightArrow} alt="Slide Right" className="img-fluid" />
        </button>
      </div>
    </div>
  );
};

export default ReSellCases;
