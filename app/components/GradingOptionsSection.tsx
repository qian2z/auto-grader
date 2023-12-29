"use client";
import { useState } from "react";
import EssayLevelOption from "./EssayLevelOption";
import FeedbackLevelOption from "./FeedbackLevelOption";
import EssayTypeOption from "./EssayTypeOption";

const GradingOptionsSection = () => {
  const [level, setLevel] = useState("Undergraduate Level");

  return (
    <>
      <EssayLevelOption setLevel={setLevel} />
      <EssayTypeOption level={level} />
      <FeedbackLevelOption />
    </>
  );
};

export default GradingOptionsSection;
