"use client";

import React, { Fragment, useContext, useEffect, useState } from "react";
import AuthProtected from "../components/AuthProtected/AuthProtected";
import { CartContext } from "../context/cartContext";
import { toast } from "react-toastify";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import ProductCartCard from "./card";
import { ul } from "framer-motion/client";
import { makeanOrder } from "../services/cartService";
import { AppleItem } from "../interface/types";
import { AuthContext } from "../context/authcontext";

const CartComponent = () => {
  const { cart, emptyCart } = useContext(CartContext);
  const { user, setOrders, orders } = useContext(AuthContext);

  const handleOrder = async (cart: AppleItem[]) => {
    try {
      const res = await makeanOrder(cart, user?.user.id!, user?.token!);
      if (res.status === "approved") {
        setOrders([
          ...orders,
          {
            id: res.id,
            date: res.date,
            products: res.products,
            status: res.status,
          },
        ]);
        toast.success("Has hecho una compra, ¡Gracias por preferirnos!");
        emptyCart();
      } else {
        toast.error("Error al procesar la orden. Inténtalo de nuevo.");
        console.error(res);
      }
    } catch (error) {
      toast.error("Error al conectar con el servidor. Inténtalo de nuevo.");
      console.error(error);
    }
  };

  // Cálculos del resumen
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const iva = subtotal * 0.16;
  const shipping = subtotal > 999 ? 0 : 99.99;
  const total = subtotal + iva + shipping;

  return (
    <div>
      <div className="bg-black overflow-hidden w-full h-16 flex items-center" />

      <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-semibold text-amber-500">
              Carrito de Compras
            </h1>
            <ShoppingCartIcon className="h-8 w-8 text-gray-600" />
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Products Section (60%) */}
            <section className="lg:w-[60%] space-y-6">
              {cart.length > 0 ? (
                <ul>
                  {cart.map((item) => (
                    <li key={item.id}>
                      <ProductCartCard product={item} />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center py-12 bg-white rounded-lg">
                  <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
                </div>
              )}
            </section>

            {/* Summary Section (40%) */}
            <div className="lg:w-[40%]">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Resumen del Pedido
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>IVA (16%)</span>
                    <span>${iva.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Envío</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-4" />
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => handleOrder(cart)}
                    className="w-full bg-yellow-600 text-white py-3 rounded-lg mt-6 hover:bg-yellow-500 transition-colors duration-300"
                  >
                    Proceder al Pago
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Envío gratis en compras mayores a $999
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CartComponent;
