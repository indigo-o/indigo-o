/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import styles from "./page.module.scss";
import { useStore } from "@/lib/store";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const setLenis = useStore((state: any) => state.setLenis)
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    setLenis(lenis)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      setLenis(null)
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.s1}></div>
      <div className={styles.s2}></div>
    </main>
  );
}
