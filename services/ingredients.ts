import { Ingredient } from "@prisma/client";
import { axiosClient } from "./axios";
import { ApiRoutes } from "./constants";


export const getAll = async (): Promise<Ingredient[]> => {

	return (await axiosClient.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data

} 