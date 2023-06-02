export interface IItemCardProps {
	data: {
		id: string
		title: string
		price: number
		rating: number
		images: Image[]
		// categoryName: string
	}
}

interface Image {
	id: number
	url: string
}
