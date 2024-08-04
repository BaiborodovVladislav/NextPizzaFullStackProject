import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function checkCollation() {
	try {
		const columns = await prisma.$queryRaw`SELECT column_name, collation_name FROM information_schema.columns WHERE table_name = 'products';`;
		console.log('Columns and Collation:', columns);
	} catch (error) {
		console.error('Error:', error);
	} finally {
		await prisma.$disconnect();
	}
}

checkCollation();
