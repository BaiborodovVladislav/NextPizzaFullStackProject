import { Ingredient } from "@prisma/client";
import React from "react";
import { Api } from "../services/api-client";


export const useIngredients=() => {
        
	
	
	const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
        const [loading, setLoading] = React.useState(true)

        
	React.useEffect(() => {
		async function fetchIngredients() {
			try {
				setLoading(true)
				const response: any = await Api.Ingredient.getAll();
				const ingredients: Ingredient[] = response.ingredients;
				setIngredients(ingredients);
			} catch (error) {
				console.error('Error fetching ingredients:', error);
			} finally {
				setLoading(false)
			}
		}

		fetchIngredients();
	}, []);

        return { ingredients, loading, };

}