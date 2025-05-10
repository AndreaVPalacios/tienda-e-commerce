import React from "react";
import { AuthProvider } from "./context/authcontext";
import { CartProvider } from "./context/cartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default Providers;
