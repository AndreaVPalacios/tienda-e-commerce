import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 15 Pro Max",
    price: 1199,
    description:
      "El iPhone 15 Pro Max es el smartphone más avanzado de Apple hasta la fecha. Equipado con el potente chip A17 Pro, una pantalla Super Retina XDR de 6.7 pulgadas y una cámara principal de 48 MP con zoom óptico 5x, ofrece un rendimiento y calidad fotográfica inigualables. Su cuerpo de titanio lo hace más ligero y resistente.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/1fe8b32e-fd71-430a-b9fb-c991a7a81993-1_24026f3e-a492-4570-8890-f88d60c73323.jpg",
    categoryId: 1,
    stock: 50,
  },
  {
    name: "iPhone 15",
    price: 799,
    description:
      "El iPhone 15 introduce la Dynamic Island para una experiencia interactiva mejorada. Equipado con el chip A16 Bionic, una cámara principal de 48 MP y una batería de larga duración, este modelo ofrece un equilibrio perfecto entre rendimiento, diseño y precio.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/666afa89-6a49-4101-b7c7-d6414d531095-1_f3ab80a4-571e-42ed-869c-16a28cd0fbd0.jpg",
    categoryId: 1,
    stock: 100,
  },
  {
    name: "iPhone 16 Pro",
    price: 1029,
    description:
      "El iPhone 16 Pro es el smartphone más avanzado de Apple hasta la fecha. Equipado con el potente chip A17 Pro, una pantalla Super Retina XDR de 6.7 pulgadas y una cámara principal de 48 MP con zoom óptico 5x, ofrece un rendimiento y calidad fotográfica inigualables. Su cuerpo de titanio lo hace más ligero y resistente.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/5ad4b48b-69e4-4013-82e4-d75ec6992627-1_afb63d5a-eeab-4f5b-86b0-0371cce6915c.jpg",
    categoryId: 1,
    stock: 50,
  },
  {
    name: "iPhone 14 Pro",
    price: 649,
    description:
      "El iPhone 14 Pro es el smartphone más avanzado de Apple hasta la fecha. Equipado con el potente chip A17 Pro, una pantalla Super Retina XDR de 6.7 pulgadas y una cámara principal de 48 MP con zoom óptico 5x, ofrece un rendimiento y calidad fotográfica inigualables. Su cuerpo de titanio lo hace más ligero y resistente.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/cf863187-d88d-4473-a8c7-fd85b8f4fae2-1_9f65df6e-4e1e-45f2-8ee3-5d5df5c19bd8.jpg",
    categoryId: 1,
    stock: 50,
  },
  {
    name: "MacBook Pro 16” M3 Max",
    price: 3499,
    description:
      "El MacBook Pro de 16 pulgadas con chip M3 Max redefine el rendimiento con su CPU y GPU avanzados. Su pantalla Liquid Retina XDR ofrece una calidad de imagen excepcional, ideal para creadores de contenido y profesionales exigentes. Incluye una batería con autonomía de hasta 22 horas.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/48eb73a6-3798-4168-9499-476b4d08eba7-1_02c90c5e-15f6-46ef-9a6b-eb14c332bf1d.jpg",
    categoryId: 2,
    stock: 30,
  },
  {
    name: "MacBook Pro Touch Bar 16”",
    price: 682,
    description:
      "El MacBook Pro de 16 pulgadas redefine el rendimiento con su CPU y GPU avanzados. Su pantalla Liquid Retina XDR ofrece una calidad de imagen excepcional, ideal para creadores de contenido y profesionales exigentes. Incluye una batería con autonomía de hasta 22 horas.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/90f19525-6dd6-4d12-b610-e9da74da6e08-1_ef5fbee5-cd4b-4191-beeb-344747a841b5.jpg",
    categoryId: 2,
    stock: 30,
  },
  {
    name: "MacBook Air M2",
    price: 1099,
    description:
      "El MacBook Air M2 es ultraligero y potente. Con un diseño renovado, pantalla Liquid Retina de 13.6 pulgadas, chip M2 con GPU de 10 núcleos y batería de hasta 18 horas, es la opción perfecta para quienes buscan portabilidad sin sacrificar rendimiento.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/cea79c0e-61f7-4d42-bfd1-6ed7f0199e3b-1_eb16091a-f112-4535-bf20-e4c3e3d9d4df.jpg",
    categoryId: 2,
    stock: 60,
  },
  {
    name: "MacBook Air 13”",
    price: 385,
    description:
      "El MacBook Air es ultraligero y potente. Con un diseño renovado, pantalla Liquid Retina de 13.6 pulgadas, chip M2 con GPU de 10 núcleos y batería de hasta 18 horas, es la opción perfecta para quienes buscan portabilidad sin sacrificar rendimiento.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/82e2261b-2dc8-4139-abb0-a290388bde00-1_18f1736c-0ef2-48c6-a54c-4a26adbd785f.jpg",
    categoryId: 2,
    stock: 60,
  },
  {
    name: "iPad Pro 12.9” M2",
    price: 1099,
    description:
      "El iPad Pro de 12.9 pulgadas con chip M2 lleva la potencia de una computadora al mundo de las tablets. Su pantalla Liquid Retina XDR, compatibilidad con el Apple Pencil y su rendimiento gráfico lo convierten en la herramienta ideal para artistas, diseñadores y profesionales creativos.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/07d31702-640c-45f8-9280-f4457de71632-1_1f48bc36-e5a2-4a9b-aa33-d85dce51127a.jpg",
    categoryId: 3,
    stock: 40,
  },
  {
    name: "iPad Air M1",
    price: 599,
    description:
      "El iPad Air M1 combina ligereza y potencia. Con su chip M1, pantalla de 10.9 pulgadas y compatibilidad con Apple Pencil y Magic Keyboard, ofrece un rendimiento similar al iPad Pro a un precio más accesible, ideal para estudiantes y profesionales.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/1401dea0-f614-400b-ae27-92aba59cbc00-1_b1d7e709-5028-419b-8324-076af3d5bdcf.jpg",
    categoryId: 3,
    stock: 70,
  },
  {
    name: "iPad Air (2022) 5ta Generación",
    price: 515,
    description:
      "El iPad Air con chip M2 lleva la potencia de una computadora al mundo de las tablets. Su pantalla Liquid Retina XDR, compatibilidad con el Apple Pencil y su rendimiento gráfico lo convierten en la herramienta ideal para artistas, diseñadores y profesionales creativos.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/f1982274-86db-4391-af87-64a1f589a656-1_d27f4593-2bd0-427e-9e4b-5508a273f851.jpg",
    categoryId: 3,
    stock: 40,
  },
  {
    name: "iPad Pro 13 M4 (2024)",
    price: 599,
    description:
      "El iPad Pro 13 M4 combina ligereza y potencia. Con su chip M4, pantalla de 10.9 pulgadas y compatibilidad con Apple Pencil y Magic Keyboard, ofrece un rendimiento similar al iPad Pro a un precio más accesible, ideal para estudiantes y profesionales.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/ff69e01c-0fec-460c-98d5-87f900756591-1_a0e3ef56-ab8a-47d6-8fce-6d9f201b4e26.jpg",
    categoryId: 3,
    stock: 70,
  },
  {
    name: "Apple Watch Ultra 2",
    price: 799,
    description:
      "El Apple Watch Ultra 2 es el reloj más resistente y avanzado de Apple, diseñado para aventuras extremas. Con una pantalla de gran brillo, GPS de precisión, resistencia al agua de hasta 100 metros y batería de hasta 36 horas, es el compañero perfecto para atletas y exploradores.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/c3985560-7849-4fbf-a9b8-1b829c10a1d3-1_fef9e40f-bd90-4f55-8318-be76f45a654b.jpg",
    categoryId: 7,
    stock: 25,
  },
  {
    name: "Apple Watch Series 9",
    price: 399,
    description:
      "El Apple Watch Series 9 introduce el chip S9, mejorando la eficiencia y rendimiento. Con nuevas funciones como el doble toque, detección de caídas y un diseño elegante, es ideal para el seguimiento de salud, estado físico y productividad diaria.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/2db0171f-7657-47b3-9f51-17f22ebb37e0-1_1f27d16f-db1d-469f-bc3e-229942d3e06c.jpg",
    categoryId: 7,
    stock: 80,
  },
  {
    name: "AirPods Pro (2da generación)",
    price: 249,
    description:
      "Los AirPods Pro 2 ofrecen una experiencia de audio superior con cancelación activa de ruido mejorada y audio adaptativo. Su diseño ergonómico y chip H2 garantizan un sonido envolvente y autonomía de hasta 6 horas por carga.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=976&hei=916&fmt=jpeg&qlt=90&.v=1724041669458",
    categoryId: 4,
    stock: 90,
  },
  {
    name: "AirPods (3ra generación)",
    price: 179,
    description:
      "Los AirPods 3 combinan calidad de sonido con un diseño compacto y resistencia al agua. Su audio espacial inmersivo y ecualización adaptativa ofrecen una experiencia auditiva premium, con una autonomía de hasta 6 horas.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/e3d83ef6-ca98-456b-bfeb-653f8cfa0ac4-1_5e7c8bff-96e0-4937-a052-d8ddbbba0533.jpg",
    categoryId: 4,
    stock: 110,
  },
  {
    name: "AirPods Max (2020)",
    price: 499,
    description:
      "Los AirPods Max combinan calidad de sonido con un diseño compacto y resistencia al agua. Su audio espacial inmersivo y ecualización adaptativa ofrecen una experiencia auditiva premium, con una autonomía de hasta 6 horas.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/14b0331b-55f8-4060-9977-4e4563ecb033-1_b9dc4d5a-881e-495c-9544-8d1e9062339e.jpg",
    categoryId: 4,
    stock: 110,
  },
  {
    name: "Apple Pencil (2da generación)",
    price: 129,
    description:
      "El Apple Pencil de segunda generación redefine la experiencia de dibujo y escritura en el iPad. Con carga inalámbrica, respuesta instantánea y detección de presión y ángulo, es la herramienta ideal para artistas y diseñadores.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/61140eaa-cd70-4e69-b4aa-daa69036997a-1_08f6dc95-7334-4817-b8ca-68e02c707490.jpg",
    categoryId: 8,
    stock: 100,
  },
  {
    name: "Magic Keyboard para iPad Pro",
    price: 299,
    description:
      "El Magic Keyboard ofrece una experiencia de escritura cómoda y precisa, con teclas retroiluminadas y un trackpad de gran sensibilidad. Compatible con iPad Pro y iPad Air, transforma la tablet en una estación de trabajo versátil.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/b5ba1e08-2f02-41dc-be7b-f035bbdf6e70-1_8eb10818-bd6c-4183-9841-ea0bd70a78ef.jpg",
    categoryId: 8,
    stock: 45,
  },
  {
    name: "Funda protectora AirPods 3",
    price: 299,
    description:
      "Protege tus AirPods de 3ª generación con estilo y seguridad con la funda Spigen Core Armor Navy. Esta funda robusta está diseñada para ofrecer una protección completa contra golpes, caídas y arañazos, a la vez que te permite acceder fácilmente a tus AirPods.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/456b4459-affe-4e64-81aa-155928f6414e-1_5cf45233-55f3-4005-87d4-e54479157f2e.jpg",
    categoryId: 8,
    stock: 45,
  },
  {
    name: "HomePod (2da generación)",
    price: 299,
    description:
      "El HomePod 2 ofrece un sonido envolvente con tecnología de audio computacional, bajos profundos y compatibilidad con Siri. Ideal para integrarse en el ecosistema Apple y controlar dispositivos del hogar inteligente.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/cc2efc85-9bb4-4d1b-84f2-4acf7400738f-1_4f456484-4a27-487c-ab07-b1004a989292.jpg",
    categoryId: 8,
    stock: 35,
  },
  {
    name: "Apple Vision Pro",
    price: 3499,
    description:
      "El Apple Vision Pro es un dispositivo revolucionario de realidad mixta que combina un diseño futurista con una potencia sin precedentes. Equipado con el chip M2 y el nuevo R1, ofrece una experiencia inmersiva con pantallas micro-OLED de ultra alta resolución, seguimiento ocular avanzado y control por gestos. Es ideal para entretenimiento, productividad y experiencias interactivas en el metaverso.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/vision-pro-card-66-vision-pro-202401?wid=1172&hei=588&fmt=p-jpg&qlt=95&.v=1702510799485",
    categoryId: 6,
    stock: 15,
  },
  {
    name: "Apple TV 4K (3ra generación)",
    price: 149,
    description:
      "El Apple TV 4K ofrece calidad cinematográfica con soporte para HDR y Dolby Atmos. Gracias al chip A15 Bionic, proporciona un rendimiento fluido para streaming y videojuegos.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/986feaed-2c58-408a-96b2-1ce7d0204781-1_9bb5e44d-cf3e-4e3c-936b-e813e8395c57.jpg",
    categoryId: 6,
    stock: 55,
  },
  {
    name: "Mac Mini M2",
    price: 599,
    description:
      "El Mac Mini M2 es una computadora de escritorio compacta pero potente, con un chip M2 de última generación y múltiples opciones de conectividad. Ideal para oficinas y creadores de contenido.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/a1cdae08-7540-4b74-b523-cf611ff02503-1_ca5539df-2f9b-4235-9923-86713a2a2656.jpg",
    categoryId: 5,
    stock: 40,
  },
  {
    name: "Mac Studio M2 Ultra",
    price: 3999,
    description:
      "El Mac Studio M2 Ultra es una estación de trabajo de alto rendimiento para profesionales. Su increíble capacidad de procesamiento y conectividad avanzada lo convierten en la opción ideal para editores de video, diseñadores y desarrolladores.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/61c7f178-86e6-4e88-ab82-bdbd614eee8d-1_a7c56c77-0012-4056-b267-37c20cba65c7.jpg",
    categoryId: 5,
    stock: 20,
  },
  {
    name: "iMac 24” M3",
    price: 1299,
    description:
      "La iMac de 24 pulgadas con chip M3 redefine la experiencia de las computadoras todo en uno. Su increíble pantalla Retina 4.5K ofrece colores vibrantes y un diseño ultradelgado. Con su potente rendimiento, es ideal tanto para tareas diarias como para trabajos profesionales de diseño, edición y productividad.",
    image:
      "https://www.backmarket.nl/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/c6a8f383-4dd9-4093-b6c3-6cadd3f987e5-1_c24dedd4-7df4-42a0-a9a8-7bb0bd8dc14f.jpg",
    categoryId: 5,
    stock: 35,
  },
  {
    name: "iMac 24”",
    price: 561,
    description:
      "La iMac de 24 pulgadas con chip M3 redefine la experiencia de las computadoras todo en uno. Su increíble pantalla Retina 4.5K ofrece colores vibrantes y un diseño ultradelgado. Con su potente rendimiento, es ideal tanto para tareas diarias como para trabajos profesionales de diseño, edición y productividad.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/bcbc25d0-b888-4321-b250-3f53b7740421-1_93cfa206-ef02-470b-aff9-6688b3f61c2b.jpg",
    categoryId: 5,
    stock: 35,
  },
  {
    name: "iMac 21”",
    price: 299,
    description:
      "La iMac de 21 pulgadas redefine la experiencia de las computadoras todo en uno. Su increíble pantalla Retina 4.5K ofrece colores vibrantes y un diseño ultradelgado. Con su potente rendimiento, es ideal tanto para tareas diarias como para trabajos profesionales de diseño, edición y productividad.",
    image:
      "https://www.backmarket.es/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D640/https://d2e6ccujb3mkqf.cloudfront.net/5d17a8b9-c24a-4f08-bfb5-22ac065d9fd3-1_57e6ee3a-9b05-4395-8bcb-58deb5c5b9ce.jpg",
    categoryId: 5,
    stock: 35,
  },
  {
    name: "Studio Display",
    price: 1599,
    description:
      "La Studio Display de Apple ofrece una resolución 5K espectacular, cámara ultra gran angular y sonido de alta fidelidad, diseñada para acompañar a los Mac más potentes.",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-1-202203?wid=728&hei=666&fmt=png-alpha&.v=1645207692041",
    categoryId: 6,
    stock: 25,
  },
  {
    name: "Mac Pro",
    price: 1599,
    description:
      "El Mac Pro de Apple ofrece un rendimiento excepcional, eficiencia energética y un diseño ecológico. Además, cuenta con funciones de accesibilidad integradas.",
    image:
      "https://confirmado.com.ve/conf/conf-upload/uploads/2019/09/2019-mac-pro-side-and-front-800x581.jpg",
    categoryId: 6,
    stock: 25,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
