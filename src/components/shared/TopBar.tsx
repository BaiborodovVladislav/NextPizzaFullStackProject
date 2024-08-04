import { cn } from "@/lib/utils";
import { Categories, Container, SortPopup } from "@/components/shared";
import React from "react";

interface Props {
	className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn("sticky top-0 bg-white shadow-lg py-5 rounded-lg shadow-black/5 z-10 ", className)}>
			<Container className="flex items-center justify-between">
				<Categories />
				<SortPopup />
			</Container>
		</div>
	);
}