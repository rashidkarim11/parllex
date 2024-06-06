// src/components/ParallaxText.tsx

import { Parallax } from "react-scroll-parallax";

const ParallaxText = () => {
  return (
    <Parallax
      className="absolute inset-0 z-0"
      translateY={[-50, 80]}
      opacity={[0, 1]}
    >
      <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="w-full text-3xl font-bold text-white  p-8 rounded">
          Integrated AI economies made simple. The only platform designed for
          seamless blockchain, smart contracts, & AI-DApps integration.
        </p>
      </div>
    </Parallax>
  );
};

export default ParallaxText;
