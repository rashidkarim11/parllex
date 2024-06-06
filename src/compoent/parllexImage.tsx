// src/components/ParallaxImage.tsx

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
import { useEffect, useRef } from "react";
import SplineViewer from "./splineViewer";

const ParallaxImage = () => {
  return (
    <Parallax
      className="absolute inset-0 z-10 w-full flex justify-center"
      translateY={[20, -40]}
    >
      <SplineViewer url="https://prod.spline.design/fJ2ptJKzT-sDkpfO/scene.splinecode" />
    </Parallax>
  );
};

export default ParallaxImage;
