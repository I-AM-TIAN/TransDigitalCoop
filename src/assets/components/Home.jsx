import Hero from "./Home/Hero";
import Navbar from "./Home/Navbar";
import Pricing from "./Home/Pricing";
import About from "./Home/About";
import Learn from "./Home/Learn";
import Footer from "./Home/Footer";
import Services from "./Home/Services";
import Video from "./Home/Video";
import '../css/home.css';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Learn />
      <Video />
      <Services />
      <Footer />
    </>
  );
}

export default Home;