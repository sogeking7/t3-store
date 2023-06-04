import { z } from 'zod'

import {
	createTRPCRouter,
	publicProcedure,
	// protectedProcedure
} from '~/server/api/trpc'
import { prisma } from '~/server/db'

export const productRouter = createTRPCRouter({
	// hello: publicProcedure
	//     .input(z.object({ text: z.string() }))
	//     .query(({ input }) => {
	//         return {
	//             greeting: `Hello ${input.text}`
	//         }
	//     }),

	getAllProducts: publicProcedure.query(async () => {
		return await prisma.product.findMany({
			select: {
				id: true,
				title: true,
				price: true,
				rating: true,
				images: true
			}
		})
	}),
	getProductById: publicProcedure
		.input(z.object({ id: z.string() }))
		.query(async ({ input }) => {
			return await prisma.product.findUnique({
				where: {
					id: input.id
				},
				include: {
					images: true
				}
			})
		}),
	getSortedProducts: publicProcedure
		.input(
			z.object({
				categoryId: z.number(),
				from: z.string().optional(),
				to: z.string().optional(),
				rating: z.string().optional()
			})
		)
		.query(async ({ input }) => {
			const { categoryId } = input

			const from = input.from ? input.from : '0'
			const to = input.to ? input.to : '1000000'
			const rating = input.rating ? parseFloat(input.rating) : undefined

			const allSortedProducts = await prisma.category.findFirst({
				where: {
					id: categoryId,
					products: {
						some: {
							price: {
								gte: +from,
								lte: +to
							},
							rating: {
								gte: rating
							}
						}
					}
				},
				select: {
					id: false,
					name: false,
					image: false,
					slug: false,
					products: {
						select: {
							images: true,
							id: true,
							title: true,
							price: true,
							rating: true,
						},
						where: {
							price: {
								gte: +from,
								lte: +to
							},
							rating: {
								gte: rating
							}
						}
					}
				}
			})
			return allSortedProducts
		})
})
