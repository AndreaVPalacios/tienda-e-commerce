"use client";

import { useRouter } from "next/navigation";
import {
  FormEvent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { AuthContext, useUserContext } from "../context/authcontext";
import { Data } from "../register/page";

const LoginUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, user } = useUserContext();

  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    if (password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres.";
    }
    if (password != user?.user.password) {
      return "Contraseña Incorrecta";
    }

    return null;
  };

  const checkErrors = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!validateEmail(email)) {
      newErrors.email = "Introduzca un email válido.";
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkErrors();

    // try {
    const loginUser = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (loginUser.status === 200) {
      const userData = await loginUser.json();
      setUser({
        email,
        ...userData,
      });
      toast.success("Inicio de sesión exitoso");
      router.push("/dashboard");
    } else if (loginUser.status === 400) {
      alert("Datos Incorrectos");
    }
    // } catch (error) {
    //   alert("Datos Incorrectos");
    // }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (user?.login) {
      router.push("/dashboard");
    }
  });

  return (
    <div>
      <div className="bg-black overflow-hidden w-full h-16 flex items-center " />
      <form
        className="flex flex-col items-center justify-center min-h-screen py-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-slate-50 rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
            {/* Sign In Section  */}
            <div className="w-3/5 p-5">
              <div>
                <img
                  src="/images/applebro_black.png"
                  alt="applebro"
                  className="w-1/4"
                />
              </div>

              <div className="py-10">
                <h2 className="text-3xl font-bold text-amber-500 mb-2">
                  Inicia Sesión
                </h2>
                <div className="border-2 w-10 border-amber-500 inline-block mb-2" />

                {/* Sign in with Social Media */}
                <div className="flex justify-center my-2">
                  <a
                    href="#"
                    className="border-2 border-gray-600 rounded-full p-3 mx-1"
                  >
                    <FaFacebookF className="text-sm" />
                  </a>
                  <a
                    href="#"
                    className="border-2 border-gray-600 rounded-full p-3 mx-1"
                  >
                    <FaGoogle className="text-sm" />
                  </a>
                </div>
                <p className="text-gray-400 my-3">
                  o usa tu correo electrónico
                </p>
                {/* Inputs */}
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 w-72 p-2 flex items-center ">
                    <FaRegEnvelope className="text-gray-400 m-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-gray-200 outline-none text-sm flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {errors.email !== "" ? (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  ) : null}
                  <div className="bg-gray-200 w-72 p-2 flex items-center m-3">
                    <MdLockOutline className="text-gray-400 m-2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Contraseña"
                      className="bg-gray-200 outline-none text-sm flex-1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="flex mr-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {errors && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="text-amber-600 m-3 border-2 border-amber-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-amber-600 hover:text-gray-100"
                  >
                    Entrar
                  </button>
                </div>
              </div>
            </div>

            {/* Sign up Section */}
            <div className="w-2/5 bg-amber-500 text-gray-50 rounded-tr-2xl rounded-br-2xl py-36 px-12">
              <h2 className="text-3xl font-bold mb-2">¡Hola Amig@!</h2>
              <div className="border-2 w-10 border-white inline-block mb-2" />
              <p className="mb-10">
                Regístrate hoy y llévate un 40% de descuento en la primera
                compra!
              </p>
              <a
                href="/register"
                className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-100 hover:text-amber-600"
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginUser;
