import React from "react";
import { prisma } from "../../../../prisma/prisma-client";
import { notFound } from "next/navigation";
import { Container, ProductImage, GroupVeriants, Title } from "@/components/shared";


export default async function ProductPage({ params: { id } }: { params: { id: string } }) {

	const product = await prisma.product.findFirst({ where: { id: Number(id) } })


	if (!product) {
		return notFound()
	}


	return <Container className="flex flex-col my-10">
		<div className="flex flex-1">
		<ProductImage imageUrl={product.imageUrl} name={product.name} size={40} className=""/>

		<div className="w-[490px] bg-[#fcfcfc] p-7">
			<Title text={product.name} size="md" className="mb-1 font-extrabold"/>

			<p className="text-gray-400"> Lorem ipsum dolor sit amet consectetur .</p>

			<GroupVeriants 
			
			selectValue="2"
			

			items={[
				{
				name: 'Маленькая',
				value: '1'
				},
				{
				name: 'Средняя',
				value: '2'
				},
				{
				name: 'Большая',
				value: '3',
				disabled: true
				},
			]}/>

		</div>
		</div>
	</Container>
}