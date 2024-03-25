import { ScratchCardComponent } from "../scratchCard";
import "./styles.css";

export const ScratchContainer = () => {
  return (
    <div className="container">
      <img className="company-img mb20" src="svgs/company.svg" alt="Stake.US" />
      <img
        className="title-img mb20"
        src="img/title.png"
        alt="SCRATCH TO WIN"
      />
      <img
        className="subtitle-img mb20"
        src="svgs/subtitle.svg"
        alt="win up to $20.000"
      />
      <ScratchCardComponent />
      <div className="container-footer">
        <img className="ad-img" src="svgs/ad.svg" alt="#AD +18" />
      </div>
    </div>
  );
};
