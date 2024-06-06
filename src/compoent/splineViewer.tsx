// src/components/SplineViewer.tsx

import { useEffect, useRef, FC } from "react";

interface SplineViewerProps {
  url: string;
}

const SplineViewer: FC<SplineViewerProps> = ({ url }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add the Spline viewer script to the document head
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js";
    document.head.appendChild(script);

    // Clean up by removing the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-[900px] h-[900px] rounded-full overflow-hidden shadow-white-bottom bg-[#F2CFEF]"
    >
      <spline-viewer url={url} />
    </div>
  );
};

export default SplineViewer;
