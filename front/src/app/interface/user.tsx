import { AppleItem } from "./types";

export interface UserSession {
  login: boolean;
  user: User;
  token: string;
}

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role: string;
  orders: Order[];
  credentials: Credential;
}

interface Credential {
  id: number;
  password: string;
}

export interface Order {
  id: number;
  date: string;
  products: AppleItem[];
  status: string;
}
