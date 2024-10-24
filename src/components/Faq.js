
import Brands from "./Brands";

const Faq = () => {
  const faqContent = {
    sectionTitle: "Frequently Asked Questions",
    description1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    description2:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    questions: [
      {
        title: "What Do I Need To Get Started?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "How Do I Get Paid After Referring A Client?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "How Many People Can I Refer In A Day?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Do I Need A Visa Card To Get Paid?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Can I Refer People To Resellme For Commission?",
        answer:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  };

  const featuredTitle = "We’ve Been Featured In";

  return (
    <>
      <div className="faq">
        <div className="container-fluid outerFaq">
          <div className="row innerFaq">
            <div className="col-lg-6 faqItem">
              <h2>{faqContent.sectionTitle}</h2>
              <p>{faqContent.description1}</p>
              <p>{faqContent.description2}</p>
            </div>
            <div className="col-lg-6 faqItem">
              <div className="accordion" id="accordionFaq">
                {faqContent.questions.map((question, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse${index}`}
                      >
                        {question.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${index}`}
                      data-bs-parent="#accordionFaq"
                    >
                      <div className="accordion-body">{question.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <h2 className="text-center">{featuredTitle}</h2>
        <Brands />
      </div>
    </>
  );
};

export default Faq;
