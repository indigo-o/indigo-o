"use client";
import { useEffect, useRef, useState } from "react";
import STYLE from "./page.module.scss";
import useDebounce from "@/hooks/useDebounce";
import { mockRequest } from "./mock";

const InfiniteMatrixList = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const pilotRef = useRef<HTMLDivElement>(null);
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  }>();
  const [data, setData] = useState([]);
  useEffect(() => {
    setImageSize({
      width: 100,
      height: 200,
    });
  }, []);
  const setPilot = () => {
    if (!imageSize || !pilotRef.current) return;
    const pilotWidth = pilotRef.current?.offsetWidth || 0;
    const pilotHeight = (pilotWidth * imageSize.height) / imageSize.width;
    pilotRef.current.style.height = pilotHeight + "px";
  };
  const handleResize = useDebounce(setPilot, 500);
  useEffect(() => {
    if (!imageSize) return;
    setPilot();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imageSize, handleResize]);
  return (
    <div className={STYLE.infinite_matrix_list} ref={listRef}>
      <div className={STYLE.pilot} ref={pilotRef}></div>
    </div>
  );
};

export default InfiniteMatrixList;
