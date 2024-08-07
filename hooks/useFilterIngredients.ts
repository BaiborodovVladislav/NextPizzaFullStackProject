"use client"

import React from "react";
import { Ingredient } from "@prisma/client";
import { Api } from "../services/api-client";

interface ReturnProps {
	ingredients: Ingredient[];
}



export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);

	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				const response: any = await Api.Ingredient.getAll();
				const ingredients: Ingredient[] = response.ingredients;
				setIngredients(ingredients);
			} catch (error) {
				console.error('Error fetching ingredients:', error);
			}
		}

		fetchIngredients();
	}, []);

	return { ingredients };
};
