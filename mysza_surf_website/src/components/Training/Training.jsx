import { PrismicRichText, useSinglePrismicDocument } from "@prismicio/react";
import Szkolenia from "../../assets/Szkolenia.jpg";

function Training() {
  const [document] = useSinglePrismicDocument("homepage");
  //   console.log(document);

  return (
    <div className="TrainingContainer">
      <div>
        <img className="TrainingImg" src={Szkolenia}/>
      </div>
      <div className="TrainingDesc">
        {document && (
          <div className="TrainingBox">
            <div className="TrainingTitle">
              <PrismicRichText field={document.data.trainingtitle} />
            </div>
            <div className="TrainingText">
              <PrismicRichText field={document.data.trainingtext} />
            </div>
            <div className="TrainingDescription">
              <PrismicRichText field={document.data.trainingtextsecondary} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Training;