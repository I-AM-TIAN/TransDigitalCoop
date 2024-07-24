import Hero from "./Home/Hero";
import Navbar from "./Home/Navbar";
import Pricing from "./Home/Pricing";
import About from "./Home/About";
import Learn from "./Home/Learn";
import Footer from "./Home/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Learn />
      <Pricing />
      <Footer />
    </>
  );
}

export default Home;