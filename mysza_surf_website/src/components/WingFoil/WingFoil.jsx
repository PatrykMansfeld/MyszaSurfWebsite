import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import Wingfoil from "../../assets/Wingfoil.jpg";

function WingFoil() {
  const [document] = useSinglePrismicDocument("homepage");

  return (
    <div className="WingFoilContainer">
      <div className="AboutUsImg">
        <img className="SzkoleniaImg" src={Wingfoil} />
      </div>
      {document && (
        <div className="WingFoilBox">
          <div className="WingFoilTitle">
            <PrismicRichText field={document.data.wingfoiltitle} />
          </div>
          <div className="WingFoilText">
            <PrismicRichText field={document.data.wingfoiltext} />
          </div>
        </div>
      )}
    </div>
  );
}

export default WingFoil;
