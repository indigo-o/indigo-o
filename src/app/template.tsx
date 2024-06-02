"use client";
import { useEffect } from "react";
import useDebounce from "@/hooks/useDebounce";

export default function Template({ children }: { children: React.ReactNode }) {
  const setRem = async () => {
    const scale = window.screen.width / 1920;
    document.documentElement.style.fontSize =
      Math.max(16 * Math.min(scale, 2), 12) + "px";
  };
  const throttledSetRem = useDebounce(setRem, 1000);

  useEffect(() => {
    setRem();
    window.addEventListener("resize", throttledSetRem);
    return () => {
      window.removeEventListener("resize", throttledSetRem);
    };
  }, []);
  return (
    <>
      {children}
    </>
  );
}
