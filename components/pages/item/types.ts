export interface IItemProps {
	data: {
		id: string
		title: string
        description: string
		price: number
        brand: string
		rating: number
		images: Image[]
		// categoryName: string
	}
}

interface Image {
	id: number
	url: string
}
