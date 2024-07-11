import Hero from "./Home/Hero";
import Navbar from "./Home/Navbar";
import Pricing from "./Home/Pricing";
import About from "./Home/About";
import Learn from "./Home/Learn";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pricing />
      <Learn />
    </>
  );
}

export default Home;