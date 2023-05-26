import { createTRPCRouter } from '~/server/api/trpc'
import { exampleRouter } from '~/server/api/routers/example'
import { userRouter } from './routers/user'
import {productRouter} from "~/server/api/routers/product";

export const appRouter = createTRPCRouter({
	example: exampleRouter,
	user: userRouter,
	product: productRouter
})

export type AppRouter = typeof appRouter
