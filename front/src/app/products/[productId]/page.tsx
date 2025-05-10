// components/ProductPage.tsx
import React, { useState } from "react";
import "./product.css";
import { getProduct } from "@/app/services/productServices";
import { notFound } from "next/navigation";
import BuyButton from "@/app/BuyButton/BuyButton";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: number }>;
}) => {
  const id = (await params).productId;
  const product = await getProduct(Number(id));

  if (!product) return notFound();

  return (
    <div>
      <div className="bg-black overflow-hidden w-full h-16 flex items-center" />

      <div className="  gap-20 p-36 max-w-full m-auto items-start">
        <div className="grid grid-cols-2  justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-auto rounded-lg ml-10 "
          />

          <div className=" gap-20">
            <h1 className="text-5xl font-bold mb-10 text-zinc-700">
              {product.name}
            </h1>
            <p className="text-base text-neutral-500">{product.description}</p>
            <p className="mt-20 text-3xl font-bold text-zinc-700">
              ${product.price}
            </p>

            <BuyButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
