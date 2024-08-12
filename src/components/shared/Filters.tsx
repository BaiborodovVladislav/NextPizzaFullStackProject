"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./Title";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboksFiltersGroup";
import { useFilters, useIngredients, useQueryFilters } from "../../../hooks";



interface Props {
	className?: string;
}



export const Filters: React.FC<Props> = ({ className }) => {

	const {ingredients, loading} = useIngredients()
	const filters = useFilters()


	const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

	useQueryFilters(filters)

	const updatePrices = (prices: number[]) => {
		filters.setPrices('priceFrom', prices[0])
		filters.setPrices('priceTo', prices[1])
	}


	return (
		<div className={cn('', className)}>
			<Title text="Фильтрация" size="sm" className="font-bold mb-5" />

			{/* Верхние чекбоксы с размерами теста*/}
			<CheckboxFiltersGroup
				Title="Тип теста"
				name="sizes"
				className="mb-5"
				onClickCheckbox={filters.setPizzaTypes}
				selected={filters.pizzaTypes}
				Items={[
					{ text: "Тонкое", value: '1' },
					{ text: "Традиционное", value: '2' },

				]}
			/>

			{/* Верхние чекбоксы с размерами пиццы */}
			<CheckboxFiltersGroup
				Title="Размеры"
				name="sizes"
				className="mb-5"
				onClickCheckbox={filters.setSizes}
				selected={filters.sizes}
				Items={[
					{ text: "20см", value: "20" },
					{ text: "30см", value: "30" },
					{ text: "40см", value: "40" },
				]}
			/>

			{/* Фильтр цены */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={5000} value={String(filters.prices.priceFrom)} onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))} />
					<Input type="number" placeholder="5000" min={0} max={5000} value={String(filters.prices.priceTo)} onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))} />
				</div>
				<RangeSlider min={0} max={5000} step={10} 
				value={[
					filters.prices.priceFrom || 0,
					filters.prices.priceTo || 5000
				]}
					onValueChange={updatePrices}
				/>
			</div>

			{/* Фильтр категории */}
			<CheckboxFiltersGroup
				Title="Ингредиенты"
				name="ingredients"
				className="mt-5"
				defaultItems={items.slice(0, 6)}
				Items={items}
				loading={loading}
				onClickCheckbox={filters.setSelectedIngredients}
				selected={filters.selectedIngredients}
			/>
		</div>
	);
}
