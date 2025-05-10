"use client";

import LoginUser from "@/app/login/page";
import "./navbar.css";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/app/context/authcontext";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/context/cartContext";

const Navbar = () => {
  const router = useRouter();
  const { user, setUser, logOut } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  console.log(user);

  const countItems = () => {
    if (cart.length > 0) {
      return;
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-section left">
        <a href="/" className="navbar-link">
          Inicio
        </a>
        <a href="/products" className="navbar-link">
          Productos
        </a>
        <a href="/servicio_tecnico" className="navbar-link">
          Servicio Técnico
        </a>
        <a href="/contactanos" className="navbar-link">
          Contáctanos
        </a>
      </div>
      <div className="navbar-logo">
        <img src="/images/applebro_white.png" alt="Applebro" />
      </div>
      <div>
        {/* <a href="/landing">
          <img
            src="/images/lupa_white.png"
            alt="Browser"
            className=" cursor-pointer w-7 h-7 "
          />
        </a> */}

        {!user?.login ? (
          <div className="inline-grid  grid-cols-2  gap-2">
            <a href={`/login`}>
              <p className="text-slate-50 border-slate-50 border-2 rounded-xl px-6 py-1 hover:bg-slate-50 hover:text-slate-950">
                Sign In
              </p>
            </a>
            <a href={`/register`}>
              <p className="text-slate-50 border-slate-50 border-2 rounded-xl px-5 py-1 hover:bg-slate-50 hover:text-slate-950">
                Sign Up
              </p>
            </a>
          </div>
        ) : (
          <div className="  flex gap-4 mt-3">
            <a href="/dashboard">
              <img
                src="/images/usuario.png"
                alt="Profile"
                className=" cursor-pointer w-7 h-7  "
              />
            </a>

            <a href="/cart">
              <span className="absolute z-10 text-xs text-slate-50 ml-1 mt-0 text-center w-4 bg-red-600 rounded-full">
                {cart.length}
              </span>
              <img
                src="/images/icon.png"
                alt="Cart"
                className=" cursor-pointer w-7 h-7 z-0 mt-1"
              />
            </a>

            <a onClick={logOut} className="cursor-pointer">
              <p className="text-slate-50 border-slate-50 border-2 rounded-xl px-2 py-1">
                Log Out
              </p>
            </a>
          </div>
        )}

        {/* <a href="/dashboard" className="icon-button">
          <img src="/images/usuario.png" alt="Profile" />
        </a>
        <a href="/cart" className="icon-button">
          <img src="/images/bolsa.png" alt="Cart" />
        </a> */}
      </div>
    </nav>
  );
};

export default Navbar;
