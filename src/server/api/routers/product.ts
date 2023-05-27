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
			include: {
				images: true
			}
		})
	})
})
