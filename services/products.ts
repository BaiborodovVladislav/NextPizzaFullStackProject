import { Product } from "@prisma/client";
import { axiosClient } from "./axios";
import { ApiRoutes } from "./constants";


export const search = async (query: string): Promise<Product[]> => {

	return (await axiosClient.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })).data

} 