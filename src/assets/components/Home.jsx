import Hero from "./Home/Hero";
import Navbar from "./Home/Navbar";
import Pricing from "./Home/Pricing";
import About from "./Home/About";
import Learn from "./Home/Learn";
import Footer from "./Home/Footer";
import Services from "./Home/Services";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Learn />
      <Services />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;