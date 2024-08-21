import { PrismicImage, useSinglePrismicDocument } from "@prismicio/react";

function Offer() {
  const [document] = useSinglePrismicDocument("homepage");
  return (
    <div className="OfferBox">
      {document && (
        <PrismicImage
          field={document.data.cennikimg}
          imgixParams={{ width: 1000, height:1000 }}
        />
      )}
    </div>
  );
}

export default Offer;
