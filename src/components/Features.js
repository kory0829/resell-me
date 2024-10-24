
import { useState } from "react";
import featureimg from "../assets/img/img7.png";
import featureimg1 from "../assets/img/img8.png";
import featureimg2 from "../assets/img/img9.png";
import featureimg3 from "../assets/img/img10.png";

const OurFeatures = () => {
  const featureTitles = {
    heading: `Resellme’s Features`,
    title: `The Resellme platform offers a wide range of features that make it stand out from competitors. Here are just a few highlights:`,
  };

  const [features] = useState([
    {
      img: featureimg,
      title: "Best Purchase Rates",
      description: `Despite the service type, our domain purchase rates are highly competitive, making them more affordable than our competitors'.`,
      id: 1,
    },
    {
      img: featureimg1,
      title: "Instant Payouts",
      description: `USD payouts are processed immediately for every client who purchases a domain. No need to wait for a high volume of clients.`,
      id: 2,
    },
    {
      img: featureimg2,
      title: "No Monthly Commitments",
      description: `With an account, you only use the platform when you have a client. Your client pays for the service, and you keep the profit.`,
      id: 3,
    },
    {
      img: featureimg3,
      title: "Business Automation",
      description: `Automate your business using our plugins. Head over to our Plugins & Integrations panel to get started.`,
      id: 4,
    },
  ]);

  return (
    <div className="ourFeatures">
      <div className="container-fluid outerFeatures">
        <div className="row innerFeatures">
          <div className="col-lg-6 featuresItems">
            <h2>{featureTitles.heading}</h2>
            <p>{featureTitles.title}</p>
          </div>
          <div className="col-lg-6 featuresItems">
            <div className="row">
              {features.map((feature) => (
                <div className="col-md-6" key={feature.id}>
                  <div className="circle pb-4">
                    <img src={feature.img} alt={feature.title} className="img-fluid rounded-circle" />
                  </div>
                  <h5>{feature.title}</h5>
                  <p className="pb-5">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
