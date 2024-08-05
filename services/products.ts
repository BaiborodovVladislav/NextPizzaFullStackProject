import { Product } from "@prisma/client";
import { axiosClient } from "../services/axios";


export const search = async (query: string) => {

	return (await axiosClient.get<Product>('/products/search', { params: { query } })).data

} 