"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export interface Data {
  [key: string]: string;
}

const RegisterUser = () => {
  const router = useRouter();

  const initialData: Data = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    // confirmPasword: "",
  };

  const [formData, setFormData] = useState(initialData);

  const [errors, setErrors] = useState(initialData);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "El nombre es requerido";
    if (!formData.lastname) newErrors.lastname = "El apellido es requerido";
    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    //    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    if (!formData.address) {
      newErrors.address = "Dirección Obligatoria";
    }
    if (!formData.phone) {
      newErrors.phone = "Número de Teléfono Obligatorio";
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      const response = await fetch("http://localhost:3001/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 400) {
        toast.error("Usuario ya registrado");
        router.prefetch("/register");
      } else {
        toast("¡Te has registrado exitosamente!");
        router.push("/login");
      }
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="bg-black overflow-hidden w-full h-16 flex items-center " />
      <form
        className="flex flex-col items-center justify-center min-h-screen py-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-slate-50 rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
            {/* Saludo */}
            <div className="w-2/5 bg-amber-500 text-gray-50 rounded-bl-2xl rounded-tl-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">¡Bienvenid@ Amig@!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2" />
              <p className="mb-10">Si ya tienes cuenta, inicia sesión aquí</p>
              <a
                href="/login"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-100 hover:text-amber-600"
              >
                Inicia Sesión
              </a>
            </div>

            {/* Register Form  */}
            <div className="py-10">
              <h2 className="text-3xl font-bold text-amber-500 mb-2">
                Regístrate
              </h2>
              <div className="border-2 w-10 border-amber-500 inline-block mb-2" />

              <div className="flex flex-col items-center text-center px-20">
                <div className="bg-gray-200 w-72 p-2  mb-3">
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <input
                        type="name"
                        name="name"
                        placeholder="Nombre"
                        className="bg-gray-200 w-24 outline-none text-sm flex-1 text-gray-400 m-2"
                        onChange={handleChange}
                        value={formData.name}
                      />
                    </div>
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name}
                      </span>
                    )}
                    <div>
                      <input
                        type="name"
                        name="lastname"
                        placeholder="Apellido"
                        className="bg-gray-200 w-24  outline-none text-sm flex-1 text-gray-400 m-2"
                        onChange={handleChange}
                        value={formData.lastname}
                      />
                    </div>
                  </div>
                </div>
                {errors.lastname && (
                  <span className="text-red-500 text-xs">
                    {errors.lastname}
                  </span>
                )}

                <div className="bg-gray-200 w-72 p-2 flex items-center ">
                  <FaRegEnvelope className="text-gray-400 m-2" />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-200 outline-none text-sm flex-1"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
                <div className="bg-gray-200 w-72 p-2 flex items-center m-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Contraseña"
                    className="bg-gray-200 outline-none text-sm flex-1"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="flex mr-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password}
                  </span>
                )}

                <div className="bg-gray-200 w-72 p-2 flex items-center ">
                  <BiMap className="text-gray-400 m-2" />
                  <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Dirección corta"
                    className="bg-gray-200 outline-none text-sm flex-1"
                    onChange={handleChange}
                    value={formData.address}
                  />
                </div>
                {errors.address && (
                  <span className="text-red-500 text-xs">{errors.address}</span>
                )}
                <div className="bg-gray-200 w-72 p-2 flex items-center mt-3">
                  <AiOutlinePhone className="text-gray-400 m-2" />
                  <input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Número de Teléfono"
                    className="bg-gray-200 outline-none text-sm flex-1"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-500 text-xs">{errors.phone}</span>
                )}
                {/* <div className="mt-5 text-xs ">
                  <input type="checkbox" className="border-gray-500" />
                  <span className="ml-1">
                    I accept the <a>Term of Use</a> & <a>Privacy Policy</a>
                  </span>
                </div> */}

                <button
                  className="m-5 text-amber-600 border-2 border-amber-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-amber-600 hover:text-gray-100"
                  type="submit"
                >
                  Regístrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterUser;
