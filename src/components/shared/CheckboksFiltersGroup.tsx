"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Input } from "../ui";

type Item = FilterChecboxProps;

interface Props {
	Title: string;
	Items: Item[];
	defaultItems: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	onChange?: (values: string[]) => void;
	defaultValue?: string[];
	className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	Title,
	className,
	Items,
	defaultItems,
	limit,
	searchInputPlaceholder = "Поиск...",
	onChange,
	defaultValue,

}) => {

	const [showAll, setShowAll] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState("");
	const [selectedValue, setSelectedVale] = React.useState<String[]>(defaultValue || []);

	const list = showAll ? Items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems.slice(0, limit);


	const onChangeSearcInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const handlerCheckboxs = (value: string) => {
		const newValueCheckbox = selectedValue.includes(value)
			? selectedValue.filter((item) => item !== value) : [...selectedValue, value];
		setSelectedVale(newValueCheckbox);
		if (onChange) {
			onChange(newValueCheckbox as string[])
		}
	}

	return (
		<div className={className}>
			<p className="font-bold mb-3">{Title}</p>
			{showAll && (
				<div className="mb-5">
					<Input onChange={onChangeSearcInput}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selectedValue.includes(item.value)} // возможно, здесь нужно использовать какое-то состояние или пропс
						onCheckedChange={() => handlerCheckboxs(item.value)} // также можешь передать onChange сюда
					/>
				))}
			</div>

			{Items.length > (limit || 0) && (
				<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
					<button
						onClick={() => setShowAll(!showAll)}
						className="text-primary mt-3"
					>
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			)}
		</div>
	);
};
