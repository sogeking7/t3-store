
import {
	createTRPCRouter,
	publicProcedure,
} from '~/server/api/trpc'

export const userRouter = createTRPCRouter({
	getId: publicProcedure.query( ({ ctx }) => {
        const userId = ctx.userId
        return userId;
    }),
})
