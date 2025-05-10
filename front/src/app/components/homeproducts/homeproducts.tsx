"use client";
import ProductCard from "@/app/home/card";
import { AppleItem, Categories } from "@/app/interface/types";
import { Button } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";

interface Props {
  products: AppleItem[];
  categories: Categories[];
}

const HomeProducts = ({ products, categories }: Props) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState<Categories | null>(null);

  useEffect(() => {
    if (category) {
      setFilteredProducts(
        products.filter(
          (product) => product.categoryId === category?.categoryId
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  return (
    <div>
      <section className="flex justify-center text-center items-center bg-green-300  shadow-xl">
        <p className="px-5 text-emerald-800 font-bold text-sm mt-2 mr-3">
          ¿Qué estas buscando?...
        </p>
        {categories.map((c, i) => (
          <button
            className="filterButtons"
            key={i}
            onClick={() => setCategory(c)}
          >
            {c.name}
          </button>
        ))}
        <button
          onClick={() => setCategory(null)}
          className="bg-red-400 text-white font-bold py-3 px-2 rounded-full shadow-lg transition-shadow duration-300 hover:shadow-inner hover:shadow-red-900"
        >
          <BsTrash />
        </button>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
        {filteredProducts.map((product, i) => (
          <Fragment key={i}>
            <ProductCard product={product} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
