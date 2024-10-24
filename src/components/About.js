
import { useState } from "react";
import AboutImage from "../assets/img/img3.png";

const About = () => {
  const [aboutContent] = useState([
    {
      imgAb: AboutImage,
      id: 1,
    },
    {
      heading: "Wait, What?",
      title: `Resellme allows you to purchase domains through our platform without paying upfront. Just have a client pay for the domain, and you keep the profit deducted from the domain purchase price!`,
      title2: "Buying domains through the platform is",
      title3: "SUPER CHEAP",
      title4: "READ MORE",
      id: 2,
    },
  ]);

  return (
    <div className="about">
      <div className="container-fluid outerAbout">
        <div className="row innerAbout">
          {aboutContent.map((about) => (
            <div className="col-12 col-lg-6 aboutItems" key={about.id}>
              {about.imgAb && <img src={about.imgAb} alt="" className="img-fluid" />}
              {about.heading && <h2>{about.heading}</h2>}
              {about.title && <p>{about.title}</p>}
              {about.title2 && (
                <p className="pb-3 pt-2">
                  {about.title2} <span>{about.title3}</span>
                </p>
              )}
              {about.title4 && (
                <button className="btn" type="button">
                  {about.title4}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
