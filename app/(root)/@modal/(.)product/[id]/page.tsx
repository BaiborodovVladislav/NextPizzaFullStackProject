import React from "react";
import { prisma } from "../../../../../prisma/prisma-client";
import { notFound } from "next/navigation";
import { ChooseProductModal } from "@/components/shared";



export default async function ProductModalPage({ params: { id } }: { params: { id: string } }) {

    const product = await prisma.product.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            ingredient: true,
            productItem: true,
        },
    })

    if(!product) {
        return notFound()
    }

    return <ChooseProductModal product={product} />
}