// components/ScrollingBanner.tsx
import React from "react";
import "../scrollingbanner/banner.css";

const ScrollingBanner: React.FC = () => {
  return (
    <div className="scrolling-banner">
      <div className="scrolling-text">
        FREE SHIPPING 40% OFF EVERYTHING &nbsp; • &nbsp; FREE SHIPPING 40% OFF
        EVERYTHING &nbsp; • &nbsp; FREE SHIPPING 40% OFF EVERYTHING &nbsp; •
        &nbsp;
      </div>
    </div>
  );
};

export default ScrollingBanner;
