import {
  PrismicImage,
  PrismicRichText,
  useSinglePrismicDocument,
} from "@prismicio/react";

function Instructors() {
  const [document] = useSinglePrismicDocument("homepage");
  return (
    <div id="instructors" className="instructors">
      {document && (
        <div className="instructors-box">
          {document.data.instructors.map((instructor, index) => (
            <div className={`instructor-${index + 1}`} key={index}>
              <div className="instructor-description">
                <div className="instructor-title">
                  <PrismicRichText field={instructor.instructortitle} />
                </div>
                <div className="instructor-text">
                  <PrismicRichText field={instructor.instructortext} />
                </div>
              </div>
              <div className="instructor-img">
                <PrismicImage className="profile-image"
                  field={instructor.instructorimg}
                  // imgixParams={{ width: 800, height: 800 }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Instructors;
