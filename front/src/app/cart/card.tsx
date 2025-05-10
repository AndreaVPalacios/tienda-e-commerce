"use client";
import { TrashIcon } from "@heroicons/react/16/solid";
import { ProductCardProps } from "../home/card";
import { toast } from "react-toastify";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ProductCartCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const removeProduct = (id: number) => {
    setCart(cart.filter((product) => product.id !== id));
    toast.success("Producto eliminado del carrito");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex items-center gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-24 h-24 object-cover rounded-md"
        />
        <div className="flex-grow">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => removeProduct(product.id)}
            className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-2 px-3 py-1 rounded-md hover:bg-red-50"
          >
            <TrashIcon className="h-4 w-4" />
            <span className="text-sm">Eliminar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCartCard;
