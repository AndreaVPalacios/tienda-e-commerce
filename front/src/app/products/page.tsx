import ProductCard from "@/app/home/card";
import { AppleItem, Categories } from "@/app/interface/types";
import React from "react";
import { appleProducts } from "../productmocks/fakes";
import {
  getCategories,
  getFeaturedProducts,
  getProduct,
  getProducts,
} from "../services/productServices";
import ScrollingBanner from "../components/scrollingbanner/scrollingbanner";
import HomeProducts from "../components/homeproducts/homeproducts";

const AllProducts = async () => {
  const fetchData = await getProducts();
  const categories = await getCategories();

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

      {/* <div className="flex justify-center text-center items-center bg-green-300  shadow-xl">
        <p className="px-5 text-emerald-800 font-bold text-sm mt-2 mr-3">
          ¿Qué estas buscando?...
        </p>
        <button className="filterButtons">iPhone</button>
        <button className="filterButtons">iPad</button>
        <button className="filterButtons">Macbooks</button>
        <button className="filterButtons">Airpods</button>
        <button className="filterButtons">Apple Watch Series</button>
        <button className="filterButtons">Accesories</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
        {fetchData.map((item, id) => (
          <ProductCard key={id} product={item} />
        ))}
      </div> */}

      <HomeProducts products={fetchData} categories={categories} />
    </div>
  );
};

//Estilos
const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
  gap: "20px",
  padding: "16px",
  cursor: "pointer",
};

export default AllProducts;

// "md:inline-grid grid-cols-5 p-8 gap-5"
// " flex-wrap gap-4 flex "
