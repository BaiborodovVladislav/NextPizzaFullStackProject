import { prisma } from '../../../../prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || '';

	console.log('Query:', query);


	try {
		const products = await prisma.product.findMany({
			where: {
				name: {
					contains: query,
					mode: 'insensitive',
				},
			},
			take: 5,
		});

		console.log('Products:', products);

		return NextResponse.json(products);
	} catch (error) {
		console.error('Error fetching products:', error);
		return NextResponse.json({ error: 'An error occurred while fetching products.' });
	}
}
