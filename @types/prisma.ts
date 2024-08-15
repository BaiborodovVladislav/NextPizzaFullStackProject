import { Product, ProductItem, Ingredient } from "@prisma/client";

export type ProductExtended = Product & { items: ProductItem[]; ingredients: Ingredient[] };