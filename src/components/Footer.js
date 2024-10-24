
import { useState } from "react";
import logo2 from "../assets/img/Navlogo.png";

const Footer = () => {
  const copy = "Copyright © 2022 Resellme.";
  const [footerItems] = useState([
    {
      title: "Libraries & Plugins",
      links: ["SDKs", "WHMCS Plugin", "WordPress Plugin"],
      id: 1,
    },
    {
      title: "Community",
      links: ["Facebook", "Developer Forums", "Twitter"],
      img: logo2,
      id: 2,
    },
    {
      title: "More",
      links: ["Blog", "Docs", "About Us", "Terms of Service", "Privacy Policy"],
      id: 3,
    },
  ]);

  return (
    <>
      <footer>
        <div className="container-fluid outerFooter">
          <div className="row innerFooter justify-content-between">
            {footerItems.map((item) => (
              <div className="col-12 col-md-4 footerItem" key={item.id}>
                <h3>{item.title}</h3>
                {item.links.map((link, index) => (
                  <a href="#" className="link" key={index}>
                    {link}
                  </a>
                ))}
                {item.img && (
                  <div className="footer-logo">
                    <img src={item.img} alt="Logo" className="img-fluid" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-center">{copy}</p>
      </footer>
    </>
  );
};

export default Footer;
