"use client"

import { Search } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { useClickAway } from "react-use";
import Link from "next/link"

interface Props {
	className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {

	const [focused, setFocused] = React.useState(false);
	const ref = React.useRef(null)

	useClickAway(ref, () => {
		setFocused(false);
	});

	return (
		<>
			{focused && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-30" />}

			<div ref={ref} className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30", className)} >
				<Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
				<input
					type="text"
					placeholder="Найти пиццу"
					className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
					onFocus={() => setFocused(true)}
				/>
				<div className={cn(
					"absolute w-full bg-white  rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
					focused && "visible opacity-100 top-12"
				)}>

					<Link className="flex items-center gap-4 px-3 py-2 hover:bg-primary/10 cursor-pointer" href="/product/1">
						<img className="rounded-sm h-10 w-10" src="https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp" width={32} height={32} alt="пицца" />
						<span>Пицца 1</span>
					</Link>


				</div>
			</div >
		</>
	);
}