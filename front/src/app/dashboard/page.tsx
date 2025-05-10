"use client";

import React, { useContext, useState } from "react";
import "./Dashboard.css"; // Importa el archivo de estilos
import AuthProtected from "../components/AuthProtected/AuthProtected";
import { AuthContext } from "../context/authcontext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import DashboardCard from "../components/renderview/card";
import { FiMail, FiUser } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { MdSmartphone } from "react-icons/md";

const Dashboard = () => {
  const router = useRouter();
  const [activeView, setActiveView] = useState("home"); // Estado para manejar las vistas

  const { user, setUser, orders } = useContext(AuthContext);

  const gotoProducts = () => {
    router.push("/products");
  };

  const logOut = () => {
    setUser(null);
    localStorage.clear();

    alert("Has cerrado tu sesión. Gracias por venir, ¡¡vuelve pronto!!");
    router.push("/landing");
  };

  // Función para renderizar la vista según el botón seleccionado
  const renderView = () => {
    switch (activeView) {
      case "account":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-2 pt-8 pl-5">
              <div className="h-2 w-2 rounded-full bg-green-500 "></div>
              <h2 className="text-xl font-semibold tracking-tight ">
                Información Personal
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <DashboardCard
                title="Nombre"
                value={user?.user.name}
                icon={<FiUser className="h-4 w-4" />}
                className="animate-in fade-in-50 duration-500"
              />
              <DashboardCard
                title="Dirección"
                value={user?.user.address}
                icon={<BiMap className="h-4 w-4" />}
                className="animate-in fade-in-50 duration-500 delay-100"
              />
              <DashboardCard
                title="Teléfono"
                value={user?.user.phone}
                icon={<MdSmartphone className="h-4 w-4" />}
                className="animate-in fade-in-50 duration-500 delay-200"
              />
              <DashboardCard
                title="Email"
                value={user?.user.email}
                icon={<FiMail className="h-4 w-4" />}
                className="animate-in fade-in-50 duration-500 delay-300"
              />
            </div>
          </div>
        );
      case "purchases":
        return (
          <div className="py-4 px-6">
            <p className="text-3xl font-semibold">Historial de Mis Compras</p>

            {orders.length > 0 ? (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <p className="text-gray-500">
                      Fecha: {new Date(order.date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600">Estado: {order.status}</p>

                    {/* Validamos si products existe y es un array */}
                    <div className="mt-4 space-y-4">
                      <p className="text-gray-500">
                        ✅Compra realizada con exito. Tu pedido está en
                        camino...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-left mt-8">
                <p className="text-lg font-semibold mb-4">
                  ¡Haz tu primera compra!
                </p>
                <button
                  onClick={gotoProducts}
                  className="bg-cyan-800 text-white py-2 px-6 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Explorar productos
                </button>
              </div>
            )}
          </div>
        );

      case "logout":
        return (
          <div className="font-[Inter]">
            Has cerrado sesión. ¡Gracias por visitarnos!
          </div>
        );
      default:
        return (
          <p className="font-[Georgia] w-4/5 flex justify-center items-center text-6xl py-5 px-6">
            Hola {user?.user.name}, Bienvenid@ a tu Dashboard.
          </p>
        );
    }
  };

  return (
    <AuthProtected>
      {/* <div className='bg-black overflow-hidden w-full h-16 flex items-center' /> */}
      <div className="background" />
      <div className="dashboard-container">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <button
            className={`sidebar-button ${
              activeView === "account" ? "active" : ""
            }`}
            onClick={() => setActiveView("account")}
          >
            Mi Cuenta
          </button>
          <button
            className={`sidebar-button ${
              activeView === "purchases" ? "active" : ""
            }`}
            onClick={() => setActiveView("purchases")}
          >
            Mis Compras
          </button>
          <button
            className={`sidebar-button ${
              activeView === "logout" ? "active" : ""
            }`}
            onClick={logOut}
          >
            Cerrar Sesión
          </button>
        </div>

        {/* Main Content */}
        <div>{renderView()}</div>
      </div>
    </AuthProtected>
  );
};

export default Dashboard;
