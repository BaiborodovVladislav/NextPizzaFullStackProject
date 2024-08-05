import { cn } from "@/lib/utils";
import { Container, SearchInput } from "../shared";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";






interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn("border border-b", className)}>
			<Container className="flex items-center justify-between py-8">
				{/* левая часть */}
				<Link href={"/"}>
					<div className="flex gap-4 items-center">
						<Image src="/logo.png" alt="logo" width={35} height={35} />
						<div className="">
							<h1 className="text-2xl uppercase font-black">Next Pizza</h1>
							<p className="text-sm text-gray-500 leading-3">вкуснее уже некуда</p>
						</div>
					</div>
				</Link>

				<div className="mx-10 flex-1">

					<SearchInput />

				</div>

				{/* правая часть */}

				<div className="flex items-center gap-3">
					<Button variant="outline" className="flex items-center gap-1" >
						<User size={16} />
						Войти</Button>
					{/* кнопки */}
					<div className="">
						<Button className="group relative">
							<b>520 ₽</b>
							<span className="h-full w-[2px] bg-white/30 mx-3" />
							<div className="flex  gap-1 ">
								<ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
								<b>3</b>
							</div>
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
}
