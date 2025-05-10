"use client";
import React, { useContext, useEffect, useState } from "react";
import { appleProducts } from "../productmocks/fakes";
import { CartContext } from "../context/cartContext";
import { ProductCardProps } from "../home/card";
import { getProducts } from "../services/productServices";
import { AppleItem } from "../interface/types";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const ProductSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Estado para el término de búsqueda
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Estado para productos filtrados

  // Función para buscar productos
  const searchProduct = async () => {
    try {
      const allProducts = await getProducts();
      // Filtra los productos que coincidan con el término de búsqueda
      const filtered = allProducts.filter((product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Ejecuta la búsqueda cuando cambia el término de búsqueda
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      return;
    }
    searchProduct();
  }, [searchTerm]);

  return (
    <div>
      {/* Contenedor del buscador */}
      <div
        style={{
          backgroundImage: "url('/images/apple.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Input de búsqueda */}
        <input
          type="text"
          placeholder="¿Qué estas buscando?..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "50%",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 10,
          }}
        />
      </div>

      {/* Mostrar productos filtrados */}
      {filteredProducts.length > 0 &&
        filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ margin: "0 0 10px" }}>{product.name}</h3>
                <p style={{ margin: "0 0 5px" }}>{product.description}</p>
              </div>
              <p style={{ fontWeight: "bold" }}>${product.price}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProductSearch;
