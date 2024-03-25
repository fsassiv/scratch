import { useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import IMG from "./animation.gif";
import "./styles.css";

export const ScratchCardComponent = () => {
  const [showCover, setShowCoder] = useState(true);

  return (
    <div className="scratch-container" onClick={() => setShowCoder(false)}>
      {showCover ? <div className="default-bg cover-bg"></div> : null}
      <ScratchCard width={320} height={320} image={IMG} finishPercent={80}>
        <div className="default-bg prize-card"></div>
      </ScratchCard>
    </div>
  );
};
