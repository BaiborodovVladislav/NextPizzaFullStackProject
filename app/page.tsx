import { Container, Title, TopBar, Filters, ProductCart, ProductsGroupList } from "@/components/shared";

export default function Home() {
	return (
		<>
			<Container className="mt-8">
				<Title text="Все пиццы" size="lg" className="font-bold" />
			</Container>

			<TopBar />

			<Container className="pb-14 mt-10 ">
				<div className="flex gap-[60px]">
					{/* фильтрация  */}
					<div className="w-[250px]">
						<Filters />
					</div>
					{/* список товаров */}
					<div className="flex-1">
						<div className="flex gap-16 flex-col">
							<ProductsGroupList title="Пиццы" items={[
								{
									id: 1,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 2,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 3,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
							]} categoryId={1} />
							<ProductsGroupList title="Комбо" items={[
								{
									id: 1,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 2,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 3,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
							]} categoryId={2} />
							<ProductsGroupList title="Закуски" items={[
								{
									id: 1,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 2,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 3,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 4,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 5,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
								{
									id: 6,
									name: "Пицца-чизбургер",
									imageUrl: "https://media.dodostatic.net/image/r:233x233/11EEFB595A197C24BA932A0AD1144AFB.avif",
									price: 550,
									items: [{ price: 550 }],
								},
							]} categoryId={3} />
						</div>
					</div>
				</div>

			</Container>

		</>
	);
}
