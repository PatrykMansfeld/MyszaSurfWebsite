import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import Szkolenia from "../../assets/Szkolenia.jpg";

function Training() {
  const [document] = useSinglePrismicDocument("homepage");
  //   console.log(document);

  return (
    <div className="AboutUsContainer">
      <div className="AboutUsImg">
        <img className="SzkoleniaImg" src={Szkolenia}/>
      </div>
      <div className="AboutUsDesc">
        {document && (
          <div className="about-us-box">
            <div className="about-us-title">
              <PrismicRichText field={document.data.trainingtitle} />
            </div>
            <div className="about-us-text">
              <PrismicRichText field={document.data.trainingtext} />
            </div>
            <div className="about-us-description">
              <PrismicRichText field={document.data.trainingtextsecondary} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Training;