"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ServicePage = () => {
  const router = useRouter();

  const gotoContact = () => {
    router.push("/contactanos");
  };

  return (
    <div>
      <div className="bg-black overflow-hidden w-full h-16 flex items-center" />
      <div className="min-h-screen bg-[url(/images/apple-studio-display.jpg)] md:bg-fixed bg-cover flex items-center justify-center p-8">
        <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Servicio Técnico
          </h1>

          <p className="text-gray-600 leading-relaxed mb-8">
            En <span className="font-semibold text-black">Applebro</span>, como
            único centro autorizado de Apple en Venezuela, estamos aquí para
            brindarte soluciones rápidas con cualquier inconveniente que puedas
            tener. Nuestro equipo de técnicos certificados por Apple está listo
            para ofrecerte una atención personalizada.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Te garantizamos un servicio integral que cubre tanto reparaciones de
            equipos Apple dentro y fuera de garantía. Utilizamos repuestos
            originales y nuestra mano de obra está certificada para asegurar la
            calidad en cada trabajo realizado.
          </p>

          <div className="mt-10">
            <button
              onClick={gotoContact}
              className="bg-black text-white py-3 px-8 rounded-full text-lg hover:bg-gray-800 transition duration-300"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
