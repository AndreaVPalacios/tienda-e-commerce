"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { AppleItem } from "../interface/types";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextProps {
  cart: AppleItem[];
  setCart: Dispatch<SetStateAction<AppleItem[]>>;
  emptyCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => {},
  emptyCart: () => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<AppleItem[]>([]);

  // Sincroniza el carrito desde localStorage solo en el cliente
  useEffect(() => {
    const localCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);

  // Guarda el carrito en localStorage solo en el cliente
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const emptyCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider value={{ cart, setCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
