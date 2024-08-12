import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSet } from "react-use";
import React from "react";

interface PriceProps {
        priceFrom?: number
        priceTo?: number
}

export interface QueryFilters extends PriceProps {
        pizzaTypes: string;
        sizes: string;
        ingredients: string;
}

export interface Filters {

        sizes: Set<string>;
        pizzaTypes: Set<string>;
        selectedIngredients: Set<string>;
        prices: PriceProps;

}

interface ReturnProps extends Filters {
        setPrices: (name: keyof PriceProps, value: number) => void
        setPizzaTypes: ((key: string) => void)
        setSizes: ((key: string) => void)
        setSelectedIngredients: ((key: string) => void)
}


export const useFilters = (): ReturnProps => {

        const router = useRouter()

        const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>


        // фильтр ингредиентов
        const [selectedIngredients, { toggle: toggleIngredients }] = useSet(new Set<string>(
                searchParams.get('ingredients')?.split(',')
        ));


        // фильтр размеров
        const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>(
                searchParams.has('sizes') ? searchParams.get('sizes')?.split(',') : []));


        // фильтр типа пицц
        const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>(
                searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') : []));



        const [prices, setPrices] = React.useState<PriceProps>({
                priceFrom: Number(searchParams.get('priceFrom')) || undefined,
                priceTo: Number(searchParams.get('priceTo')) || undefined,
        });


        const updatePrice = (name: keyof PriceProps, value: number) => {
                setPrices((prev) => ({
                        ...prev,
                        [name]: value,
                }));
        }




        return {
                sizes, pizzaTypes,
                selectedIngredients,
                prices,

                setPizzaTypes: togglePizzaTypes,
                setPrices: updatePrice,
                setSizes: toggleSizes,
                setSelectedIngredients: toggleIngredients

        }


}
