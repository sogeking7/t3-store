export interface IItemCardProps {
	data: IItemCard
}

export interface IItemCard {
	id: string
	title: string
	price: number
	rating: number
	images: Image[]
}

interface Image {
	id: number
	url: string
}
