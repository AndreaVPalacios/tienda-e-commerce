"use client";

import { AuthContext } from "@/app/context/authcontext";
import { useRouter } from "next/navigation";

import { useContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const AuthProtected = ({ children }: Props) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (!user?.login) {
      router.push("/login");
    }
    if (!isClient) setIsClient(true);
  });

  useEffect(() => {
    if (!user?.login) {
      router.push("/login");
    }
    if (!isClient) setIsClient(true);
  }, [user]);

  if (!isClient) return "Loading...";
  return <div>{children}</div>;
};

export default AuthProtected;
