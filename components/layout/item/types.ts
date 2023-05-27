export interface IItemProps {
	data: {
		title: string
		description: string
		price: number
		quantity: number
		rating: number
		brand: string
		images: [
			{
				url: string
			}
		]
		// categoryName: string
	}
}
