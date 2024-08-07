"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboksFiltersGroup";
import { useFilterIngredients } from "../../../hooks/useFilterIngredients";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients } = useFilterIngredients();

	console.log(ingredients);




	const items = ingredients.map((item) => ({ value: String(item.id), text: item.name }));

	return (
		<div className={cn('', className)}>
			<Title text="Фильтрация" size="sm" className="font-bold mb-5" />

			{/* Верхние чекбоксы */}
			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="1" />
			</div>

			{/* Фильтр цены */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">Цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={5000} defaultValue={0} />
					<Input type="number" placeholder="5000" min={0} max={5000} />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			{/* Фильтр категории */}
			<CheckboxFiltersGroup
				Title="Ингредиенты"
				className="mt-5"
				defaultItems={items.slice(0, 6)}
				Items={items}
			/>
		</div>
	);
}
