import { useRouter } from "next/router";
import { AppleItem } from "../interface/types";
import { appleProducts } from "../productmocks/fakes";

export const getProducts = async (): Promise<AppleItem[]> => {
  try {
    const response = await fetch("http://localhost:3001/products", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-lanzar el error si es necesario
  }
};

export const getFeaturedProducts = async (n: number): Promise<AppleItem[]> => {
  const result = await getProducts().then((res) => res.slice(0, n));
  return result;
};

export const getProduct = async (id: number): Promise<AppleItem> => {
  const result = await getProducts();
  // .then((res) => res.filter((product) => product.id === id));
  const showProductID = result.filter((product) => product.id === id)[0];
  return showProductID;
};

export const getCategories = async () => {
  const categoriesNames = [
    "iPhones",
    "iPhones",
    "Macbooks",
    "iPads",
    "Airpods",
    "iMacs",
    "Monitors",
    "Apple Watch",
    "Accessories",
  ];

  const result = await getProducts()
    .then((res) => res.map((product) => product.categoryId))
    .then((categories) => Array.from(new Set(categories)))
    .then((res) =>
      res.map((categoryId) => {
        return {
          categoryId: categoryId,
          name: categoriesNames[Number(categoryId)],
        };
      })
    );
  return result;
};
