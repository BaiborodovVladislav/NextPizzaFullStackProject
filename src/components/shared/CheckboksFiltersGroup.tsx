"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./FilterCheckbox";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;

interface Props {
	Title: string;
	Items: Item[];
	defaultItems?: Item[];
	limit?: number;
	loading?: boolean,
	searchInputPlaceholder?: string;
	onClickCheckbox?: (id: string) => void;
	defaultValue?: string[];
	selected?: Set<string>;
	className?: string;
	name?: string;

}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	Title,
	className,
	Items,
	defaultItems,
	limit = 6,
	searchInputPlaceholder = "Поиск...",
	onClickCheckbox,
	loading,
	selected,
	name

}) => {

	const [showAll, setShowAll] = React.useState(false);
	
	const [searchValue, setSearchValue] = React.useState("");

	const list = showAll ? Items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : (defaultItems || Items).slice(0, limit);


	const onChangeSearcInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	{/* отрисовка на скелетоне списка чекбоксов */ }

	if (loading) {
		return <div className={className}>
			<p className="font-bold mb-3">{Title}</p>
			{
				...Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />
					))
			}
			<Skeleton className=" w-28 h-6 mb-4 rounded-[8px]" />

		</div>
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

			{/* вывод чекбоксов */}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						key={index}
						text={item.text}
						value={item.value}
						endAdornment={item.endAdornment}
						checked={selected?.has(item.value)}
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						name={name}
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
