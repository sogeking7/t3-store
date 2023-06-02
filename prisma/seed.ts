import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import { data as categories } from '../public/data/categories'

const prisma = new PrismaClient()

async function main() {
	console.log('seeding')
	// await prisma.product.deleteMany()
	for (let i = 0; i < 15; i++) {
		await createProduct()
	}
	// await prisma.category.deleteMany()
	// await initCategories()
}
async function createProduct() {
	const categoryId = faker.number.int({ min: 1, max: categories.length })

	console.log('categoryId: ', categoryId)
	await prisma.product.create({
		data: {
			title: faker.commerce.productName(),
			description: faker.commerce.productDescription(),
			price: faker.number.int({ min: 1, max: 1000 }),
			quantity: faker.number.int({ max: 100 }),
			rating: faker.number.float({ min: 0, max: 5 }),
			brand: faker.commerce.productAdjective(),
			images: {
				create: [
					{
						url: faker.image.urlPicsumPhotos({ width: 400, height: 400 })
					}
				]
			},
			categoryId
		}
	})
}

async function initCategories() {
	for (let i = 0; i < 10; i++) {
		await prisma.category.create({
			data: {
				name: categories[i]!.name,
				slug: categories[i]!.slug
			}
		})
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
