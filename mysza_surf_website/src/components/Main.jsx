import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Instructors from "./Instructors/Instructors";
import Navbar from "./Navbar/Navbar";
import Offer from "./Offer/Offer";
import WindRadar from "./WindRadar/WindRadar";

export default function Main() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <Offer />
      <Instructors />
      <WindRadar />
      <Footer />
    </>
  );
}
