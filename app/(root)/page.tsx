import { Container, Title, TopBar, Filters, ProductsGroupList } from "@/components/shared";
import { prisma } from "../../prisma/prisma-client";

export default async function Home() {


	const categories = await prisma.category.findMany({
		include: {
			product: {
				include: {
					ingredient: true,
					productItem: true,
				}
			},
		}
	})


	return (
		<>
			<Container className="mt-8">
				<Title text="Все пиццы" size="lg" className="font-bold" />
			</Container>

			<TopBar categories={categories.filter((category) => (category.product.length > 0))}/>

			<Container className="pb-14 mt-10 ">
				<div className="flex gap-[60px]">
					{/* фильтрация  */}
					<div className="w-[250px]">
						<Filters />
					</div>
					{/* список товаров */}
					<div className="flex-1">
						<div className="flex gap-16 flex-col">
							{
								categories.map((category) =>
									category.product.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categoryId={category.id}
											items={category.product}
											
										/>
									))
							}
						</div>
					</div>
				</div>

			</Container>

		</>
	);
}
