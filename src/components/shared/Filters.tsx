import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboksFiltersGroup";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Title text="Фильтрация" size="sm" className="font-bold mb-5" />

			{/* верхние чекбоксы */}

			<div className="flex flex-col gap-4">
				<FilterCheckbox text="Можно собирать" value="1" />
				<FilterCheckbox text="Новинки" value="1" />
			</div>
			{/* фильтр цены */}
			<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
				<p className="font-bold mb-3">цена от и до:</p>
				<div className="flex gap-3 mb-5">
					<Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
					<Input type="number" placeholder="1000" min={100} max={1000} />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>
			{/* фильтр категории */}
			<CheckboxFiltersGroup
				Title="Ингредиенты"
				className="mt-5"
				limit={6}
				defaultItems={[
					{
						text: "Сыр",
						value: "1",
					},
					{
						text: "Помидоры",
						value: "2",
					},
					{
						text: "Соленые огурчики",
						value: "3",
					},
					{
						text: "Бекон",
						value: "4",
					},
					{
						text: "Шампиньоны",
						value: "5",
					},
					{
						text: "Моцарелла",
						value: "6",
					}
				]}
				Items={[
					{
						text: "Сыр",
						value: "1",
					},
					{
						text: "Помидоры",
						value: "2",
					},
					{
						text: "Соленые огурчики",
						value: "3",
					},
					{
						text: "Бекон",
						value: "4",
					},
					{
						text: "Шампиньоны",
						value: "5",
					},
					{
						text: "Моцарелла",
						value: "6",
					},
					{
						text: "Сыр",
						value: "1",
					},
					{
						text: "Помидоры",
						value: "2",
					},
					{
						text: "Соленые огурчики",
						value: "3",
					},
					{
						text: "Бекон",
						value: "4",
					},
					{
						text: "Шампиньоны",
						value: "5",
					},
					{
						text: "Моцарелла",
						value: "6",
					},
					{
						text: "Сыр",
						value: "1",
					},
					{
						text: "Помидоры",
						value: "2",
					},
					{
						text: "Соленые огурчики",
						value: "3",
					},
					{
						text: "Бекон",
						value: "4",
					},
					{
						text: "Шампиньоны",
						value: "5",
					},
					{
						text: "Моцарелла",
						value: "6",
					}
				]}
			/>

		</div>
	);
}