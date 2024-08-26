import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import Logo_pion from "../../assets/Logo_pion.jpg";

function AboutUs() {
  const [document] = useSinglePrismicDocument("homepage");
  //   console.log(document);

  return (
    <div id="home" className="AboutUsContainer">
      <div className="AboutUsImg">
        <img className="SzkoleniaImg" src={Logo_pion}/>
      </div>
      <div className="AboutUsDesc">
        {document && (
          <div className="about-us-box">
            <div className="about-us-title">
              <PrismicRichText field={document.data.aboutustitle} />
            </div>
            <div className="about-us-text">
              <PrismicRichText field={document.data.aboutustext} />
            </div>
            <div className="about-us-description">
              <PrismicRichText field={document.data.aboutusdescription} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AboutUs;
