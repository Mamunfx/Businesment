import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import WIB from "../Components/WIB";
import WWD from "../Components/WWD";

const Home = () => {
  return (
    <div className="space-y-6">
      <Navbar></Navbar>
      <Hero></Hero>
      <WIB></WIB>
      <WWD></WWD>
      <Footer></Footer>
    </div>
  );
};

export default Home;
