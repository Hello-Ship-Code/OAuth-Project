import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

type UserSelect = Prisma.UserSelect | null | undefined

export const findUserByEmail = async (email: string, selectFields?: UserSelect) => {
  return prisma.user.findFirst({
    where: { email },
    ...(selectFields ? { select: selectFields } : {}),
  })
}
