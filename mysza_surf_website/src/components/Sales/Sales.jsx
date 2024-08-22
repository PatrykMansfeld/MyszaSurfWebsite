import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import Sprzedaz from "../../assets/Sprzedaz.jpg";
import Wynajem from "../../assets/Wynajem.jpg";
import Doradztwo from "../../assets/Doradztwo.jpg";


function Sales() {
  const [document] = useSinglePrismicDocument("homepage");

  return (
    <div className="ShopContainer">
      <div className="ShopLeft">
        <div className="ShopLeftTopRow">
          <img className="SaleSticker" src={Sprzedaz} />
        </div>
        <div className="ShopLeftBottomRow">
          <img className="SaleSticker" src={Wynajem} />
          <img className="SaleSticker" src={Doradztwo} />
        </div>
      </div>
      {document && (
        <div className="ShopBox">
          <div className="ShopTitle">
            <PrismicRichText field={document.data.saletitle} />
          </div>
          <div className="ShopText">
            <PrismicRichText field={document.data.saletext} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Sales;
