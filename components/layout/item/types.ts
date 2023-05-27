export interface IItemProps {
	data: {
		title: string
		description: string
		price: number
		quantity: number
		rating: number
		brand: string
		images: Image[]
		// categoryName: string
	}
}

interface Image {
	id: number
	url: string
}
