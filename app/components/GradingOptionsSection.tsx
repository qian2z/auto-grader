"use client";
import { detail_levels } from "@/index/details";
import { essay_levels } from "@/index/levels";
import { scoring_scales } from "@/index/scales";
import { getPointByValue } from "@/utils/findPoint";
import { useEffect, useState } from "react";
import { essay_types } from "../../index/types";
import useSubmissionsDataStore, { Options } from "../submissionsStore";
import AvailableCreditBox from "./AvailableCreditBox";
import EssayLevelOption from "./EssayLevelOption";
import EssayTypeOption from "./EssayTypeOption";
import FeedbackLevelOption from "./FeedbackLevelOption";
import MinWordCountInput from "./MinWordCountInput";
import ScoringScaleSelector from "./ScoringScaleSelector";

const GradingOptionsSection = () => {
  const defaultLevel = essay_levels[2].items[0].value;
  const defaultType = essay_types[defaultLevel]![0];
  const defaultScale = scoring_scales[0].value;
  const defaultDetail = detail_levels[0].value;
  const defaultPoint = getPointByValue(defaultScale);

  const [level, setLevel] = useState(defaultLevel);
  const [type, setType] = useState(defaultType.value);
  const [scale, setScale] = useState(defaultScale);
  const [wordCount, setWordCount] = useState("250");
  const [detail, setDetail] = useState(defaultDetail);
  const [point, setPoint] = useState(defaultPoint);

  const options: Options = { level, type, scale, wordCount, detail, point };
  const setOptions = useSubmissionsDataStore((s) => s.setOptions);

  useEffect(() => {
    setOptions(options);
  }, [level, type, scale, wordCount, detail, point]);

  return (
    <>
      <AvailableCreditBox />
      <EssayLevelOption level={level} setLevel={setLevel} />
      <EssayTypeOption level={level} type={type} setType={setType} />
      <ScoringScaleSelector
        scale={scale}
        setScale={setScale}
        setPoint={setPoint}
      />
      <MinWordCountInput wordCount={wordCount} setWordCount={setWordCount} />
      <FeedbackLevelOption detail={detail} setDetail={setDetail} />
    </>
  );
};

export default GradingOptionsSection;
