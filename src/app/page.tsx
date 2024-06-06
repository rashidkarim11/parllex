"use client";
// src/pages/index.tsx

import ParallaxImage from "@/compoent/parllexImage";
import ParallaxText from "@/compoent/parllexText";

const Home = () => {
  return (
    <main className="relative flex  flex-col items-center justify-between p-24 ">
      <div className="relative w-full   h-screen flex items-center justify-center">
        <ParallaxImage />
        <ParallaxText />
      </div>
    </main>
  );
};

export default Home;
