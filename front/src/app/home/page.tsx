// pages/index.tsx

import React, { Fragment } from "react";

import ScrollingBanner from "../components/scrollingbanner/scrollingbanner";
import AllProducts from "../products/page";
import { getProducts } from "../services/productServices";
import ProductCard from "./card";

const HomePage = async () => {
  const fetchData = await getProducts();

  return (
    <div>
      <div>
        <video
          src="/images/Introducing_Apple.mp4"
          autoPlay
          muted
          loop
          className="object-cover w-full h-96"
        />
      </div>
      <ScrollingBanner />

      <div>
        {fetchData.map((item, i) => (
          <Fragment key={i}>
            <ProductCard product={item} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

// Estilos
const imgHeader = {
  objectFit: "cover",
  width: "100%",
  height: "75vh",
};

export default HomePage;
