import { PrismicImage, useSinglePrismicDocument } from "@prismicio/react";

function Banner() {
  const [document] = useSinglePrismicDocument("homepage");
  return (
    <div className="Banner">
      {document && (
        <PrismicImage className="banner-image"
          field={document.data.banner}
        />
      )}
    </div>
  );
}

export default Banner;