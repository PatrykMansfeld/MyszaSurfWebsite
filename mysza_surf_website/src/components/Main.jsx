import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Fix from "./Fix/Fix";
import Footer from "./Footer/Footer";
import Instructors from "./Instructors/Instructors";
import Navbar from "./Navbar/Navbar";
import Offer from "./Offer/Offer";
import Shop from "./Shop/Shop";
import Training from "./Training/Training";
import WindRadar from "./WindRadar/WindRadar";
import WingFoil from "./WingFoil/WingFoil";

export default function Main() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <Training />
      {/* <Offer /> */}
      <Shop />
      <Fix />
      <WingFoil />
      <Instructors />
      <WindRadar />
      <Footer />
    </>
  );
}
