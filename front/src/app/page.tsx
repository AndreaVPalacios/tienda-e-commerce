// "use client"

import { useState } from "react";
import Cart from "./cart/cartcomponent";
import Dashboard from "./dashboard/page";
import HomePage from "./home/page";
import ProductSearch from "./landing/page";
import LoginUser from "./login/page";
import ProductPage from "./products/[productId]/page";

export default function Home() {
  // // const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)

  return (
    <div>
      <ProductSearch />
      {/* {token ? <Dashboard /> : <LoginUser token={token} setToken={setToken} /> } */}
    </div>
  );
}
