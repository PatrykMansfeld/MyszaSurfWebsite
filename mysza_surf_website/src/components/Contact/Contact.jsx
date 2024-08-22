import {
  PrismicRichText,
  useSinglePrismicDocument,
  PrismicImage,
} from "@prismicio/react";

function AboutUs() {
  const [document] = useSinglePrismicDocument("homepage");

  return (
    <div className="KontaktContainer">
      {document && (
        <div className="KontaktFlex">
          <div className="KontaktImageBox">
            <PrismicImage
              className="KontaktImage"
              field={document.data.kontaktimg}
              imgixParams={{ width: 200, height: 200 }}
            />
          </div>
          <div className="KontaktTextBox">
            <div className="KontaktTitle">
              <PrismicRichText field={document.data.kontakttitle} />
            </div>
            <div className="KontaktText">
              <PrismicRichText field={document.data.kontakttext} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutUs;
