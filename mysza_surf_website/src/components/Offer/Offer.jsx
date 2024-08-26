import { PrismicImage, useSinglePrismicDocument } from "@prismicio/react";

function Offer() {
  const [document] = useSinglePrismicDocument("homepage");
  return (
    <div id="cennik" className="OfferBox">
      {document && (
        <PrismicImage className="offer-image"
          field={document.data.cennikimg}
        />
      )}
    </div>
  );
}

export default Offer;
