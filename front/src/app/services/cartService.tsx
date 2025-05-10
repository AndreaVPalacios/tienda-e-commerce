import { AppleItem } from "../interface/types";

export const makeanOrder = async (
  cart: AppleItem[],
  userId: number,
  token: string
) => {
  const cartAdapted = (cart: AppleItem[]) => {
    return cart.map((item) => item.id); // Devuelve un array de IDs
  };

  const body = {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ userId, products: cartAdapted(cart) }),
  };

  const response = await fetch("http://localhost:3001/orders", body).then(
    (res) => res.json()
  );

  return await response;
};
