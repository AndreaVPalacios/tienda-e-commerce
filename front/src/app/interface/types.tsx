// types
export interface AppleItem {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: string;
}

export interface Categories {
  name: string;
  categoryId: string;
}
