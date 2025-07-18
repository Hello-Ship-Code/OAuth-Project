import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

type UserSelect = Prisma.CategoriesSelect | null | undefined

export const findCatByName = async (name: string, selectFields?: UserSelect) => {
  return prisma.categories.findFirst({
    where: { name },
    ...(selectFields ? { select: selectFields } : {}),
  })
}
