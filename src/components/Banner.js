

import NavBar from "./Navbar";
import bannerImage from "../assets/img/img2.png";

const Banner = () => {
  const bannerContent = {
    mainTitle: "Buy and sell domains with no capital!",
    subtitle:
      "Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes",
    button1Text: "SIGN UP FOR FREE",
    button2Text: "READ ABOUT US",
  };

  return (
    <div className="banner">
      <NavBar />
      <div className="outerBanner text-center">
        <div className="innerBanner">
          <h1>{bannerContent.mainTitle}</h1>
          <p>{bannerContent.subtitle}</p>
          <div className="bannerButtons">
            <button className="btn" type="button">
              {bannerContent.button1Text}
            </button>
            <button className="btn" type="button">
              {bannerContent.button2Text}
            </button>
          </div>
        </div>
      </div>
      <div className="SecImg">
        <img src={bannerImage} alt="Banner" className="img-fluid" />
      </div>
    </div>
  );
};

export default Banner;
