
import * as React from "react";
import img from "../assets/img/img4.png";
import img2 from "../assets/img/img5.png";
import img3 from "../assets/img/img6.png";
import one from "../assets/img/one.png";
import two from "../assets/img/two.png";
import three from "../assets/img/three.png";

const GetStartedCards = () => {
  const [getStarted] = React.useState([
    {
      stepImage: one,
      cardImage: img,
      title: "Register",
      description: `To get started with buying domains for clients, all you need to do is create an account on our platform using your email, phone number & preferred payment method.`,
      id: 1,
    },
    {
      stepImage: two,
      cardImage: img2,
      title: "Find Client",
      description: `Find a client who can be a business owner or a freelancer who wants a website but does not have a domain. You take lead to buy the desired domain via ReSellMe for the client upfront.`,
      id: 2,
    },
    {
      stepImage: three,
      cardImage: img3,
      title: "Get Money!",
      description: `You only pay when you get a client to sell the service to. Your client pays for the service and you keep the profit. Our payment methods include Paypal, Visa, MasterCard, Bitcoin & Mukuru.`,
      id: 3,
    },
  ]);

  return (
    <div className="getStarted">
      <h2>How To Get Started</h2>
      <div className="container-fluid outerGetStart text-center">
        <div className="row g-5 innerGetStart">
          {getStarted.map((card, index) => (
            <div
              className="col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 GetStartedItems text-center"
              key={card.id}
            >
              <div className="card text-center align-items-center">
                <span className="card-number">{index + 1}</span>
                {/* Circle with number */}
                <img
                  src={card.cardImage}
                  alt={`Step ${index + 1} illustration`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn mt-5 getbtn" type="button">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default GetStartedCards;
