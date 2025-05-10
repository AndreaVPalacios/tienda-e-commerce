"use client";

import { useContext, useState } from "react";
import { AuthContext } from "../context/authcontext";
import { AppleItem } from "../interface/types";
import { CartContext } from "../context/cartContext";
import { toast } from "react-toastify";

interface Props {
  product: AppleItem;
}

const BuyButton = ({ product }: Props) => {
  const { user } = useContext(AuthContext);
  const { cart, setCart } = useContext(CartContext);

  const isProductInCart = cart
    ? cart.some((item) => item.id === product.id)
    : false;

  const handleBuy = () => {
    if (!user?.login) {
      toast.warning("Inicia sesión para agregar este producto al carrito");
      return;
    }

    if (isProductInCart) {
      return toast.warning("¡Ya agregaste este producto!");
    }

    setCart([...cart, product]);
    toast.success("Agregado al carrito");
  };

  return (
    <button
      type="button"
      disabled={isProductInCart}
      onClick={handleBuy}
      className="mt-9 px-14 py-4 bg-slate-600 text-slate-200 text-base border-none rounded-full cursor-pointer hover:bg-slate-500 "
    >
      {isProductInCart ? "Añadido en el carrito" : "Agregar al carrito"}
    </button>
  );
};

export default BuyButton;
