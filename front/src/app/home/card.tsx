// components/ClothingCard.tsx
import React from "react";
import "./card.css"; // Asegúrate de importar el archivo CSS
import { AppleItem } from "../interface/types";
import Link from "next/link";

export interface ProductCardProps {
  product: AppleItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <img
        src={product.image}
        alt={product.name}
        className=" w-full h-96 object-cover"
      />
      <div className=" p-4">
        <h3 className=" text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="text-sky-800 font-bold text-xl mb-5">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
