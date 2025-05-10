import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.respository";

interface ICategory {
  name: string;
}

const categoriesToPreLoad: ICategory[] = [
  { name: "iPhones" }, //1
  { name: "Macbooks" }, //2
  { name: "iPads" }, //3
  { name: "Airpods" }, //4
  { name: "iMacs" }, //5
  { name: "Monitors" }, //6
  { name: "Apple Watch" }, //7
  { name: "Accessories" }, //8
];

export const preLoadCategories = async () => {
  const categories = await CategoryRepository.find();
  if (!categories.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Category)
      .values(categoriesToPreLoad)
      .execute();
  console.log("Categories preloaded");
};
