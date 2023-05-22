import { z } from 'zod'

import {
	createTRPCRouter,
	publicProcedure,
} from '~/server/api/trpc'

export const userRouter = createTRPCRouter({
	getId: publicProcedure.query(async ({ ctx }) => {
        const userId = ctx.userId
        return userId;
    }),
})
