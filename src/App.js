
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import Banner from "./components/Banner";
import About from "./components/About";
import GetStartedCards from "./components/GetStartedCards";
import Features from "./components/Features";
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonal";
import Faq from "./components/Faq";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import '../src/App.css'


function App() {
  return (
    <>
      <div className="sticky-top">
        <Banner />
        <About />
        <GetStartedCards />
        <Features />
        <Carousel />
        <Testimonial />
        <Faq />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;