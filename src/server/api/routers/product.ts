import { z } from 'zod'

import {
	createTRPCRouter,
	publicProcedure,
	protectedProcedure
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
			},
		})
	}),
	getProductById: publicProcedure
		.input(z.object({id: z.string()})).
		query(async ({input}) => {
			return await prisma.product.findUnique({
				where: {
					id: input.id
				},
				include: {
					images: true
				}
			})
		})
})
