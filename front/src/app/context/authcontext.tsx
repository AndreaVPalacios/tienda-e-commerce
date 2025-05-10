"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Data } from "../register/page";
import { Order, UserSession } from "../interface/user";
import { AppleItem } from "../interface/types";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: UserSession | null;
  setUser: Dispatch<SetStateAction<UserSession | null>>;
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  orders: [],
  setOrders: () => {},
  logOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    setOrders(user?.user.orders || []);
  }, [user]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user")!);
    setUser(localUser);
  }, []);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logOut, orders, setOrders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(AuthContext);
};
