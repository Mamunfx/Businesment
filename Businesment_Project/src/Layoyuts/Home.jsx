import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import WIB from "../Components/WIB";
import WWD from "../Components/WWD";
import Featured_Section from "../Components/Featured_Section";

const Home = () => {
  return (
    <div className="space-y-6">

      <Hero></Hero>
      <WIB></WIB>
      <WWD></WWD>
      <Featured_Section></Featured_Section>
    </div>
  );
};

export default Home;
