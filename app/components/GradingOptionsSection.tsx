"use client";
import { useState } from "react";
import EssayLevelOption from "./EssayLevelOption";
import EssayTypeOption from "./EssayTypeOption";
import FeedbackLevelOption from "./FeedbackLevelOption";
import MinWordCountInput from "./MinWordCountInput";
import ScoringScaleSelector from "./ScoringScaleSelector";

const GradingOptionsSection = () => {
  const [level, setLevel] = useState("Undergraduate Level");

  return (
    <>
      <EssayLevelOption setLevel={setLevel} />
      <EssayTypeOption level={level} />
      <ScoringScaleSelector />
      <MinWordCountInput />
      <FeedbackLevelOption />
    </>
  );
};

export default GradingOptionsSection;
