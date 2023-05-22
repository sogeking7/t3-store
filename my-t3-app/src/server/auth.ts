import { type GetServerSidePropsContext } from 'next'
import {
	getServerSession,
	type NextAuthOptions,
	type DefaultSession
} from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '~/server/db'

declare module 'next-auth' {
	interface Session extends DefaultSession {
		user?: {
			id: string
			// ...other properties
			// role: UserRole;
		} & DefaultSession['user']
	}
}

export const authOptions: NextAuthOptions = {
	providers: [],
	adapter: PrismaAdapter(prisma)
}

export const getServerAuthSession = (ctx: {
	req: GetServerSidePropsContext['req']
	res: GetServerSidePropsContext['res']
}) => {
	return getServerSession(ctx.req, ctx.res, authOptions)
}
