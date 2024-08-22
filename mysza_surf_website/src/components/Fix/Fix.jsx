import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import Naprawa from "../../assets/Naprawa.jpg";

function Fix() {
  const [document] = useSinglePrismicDocument("homepage");

  return (
    <div className="FixContainer">
      <div className="AboutUsImg">
        <img className="SzkoleniaImg" src={Naprawa} />
      </div>
      {document && (
        <div className="FixBox">
          <div className="FixTitle">
            <PrismicRichText field={document.data.fixtitle} />
          </div>
          <div className="FixText">
            <PrismicRichText field={document.data.fixtext} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Fix;
