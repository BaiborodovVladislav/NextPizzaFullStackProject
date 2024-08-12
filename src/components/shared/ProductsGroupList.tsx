"use client"

import React from "react";
import { Title } from "./Title";
import { useIntersection } from "react-use";
import { cn } from "@/lib/utils";
import { ProductCart } from "./ProductCart";
import { useCategoryStore } from "../../../store/categry";


interface Props {
	title: string;
	items: any[];
	listClassName?: string;
	categoryId: number;
	className?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
	className,
	title,
	categoryId,
	items,
	listClassName,

}) => {
	const setActivCategryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = React.useRef(null);
	const intersection = useIntersection(intersectionRef, {
		threshold: 0.4,
	},);

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActivCategryId(categoryId);
		}
	}, [title, categoryId, setActivCategryId, intersection?.isIntersecting])


	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="mb-5 font-extrabold" />

			<div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
				{
					items.map((product) => {
						return (
							<ProductCart
								key={product.id}
								id={product.id}
								name={product.name}
								imageUrl={product.imageUrl}
								price={product.productItem && product.productItem.length > 0 ? product.productItem[0].price : "Цена отсутствует"}
								/>
						);
					})
				}
			</div>
		</div>
	);
}
