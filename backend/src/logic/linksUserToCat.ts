import { prisma } from '../config/database'

export const linksUserToCat = async (userId: string, catsIds: string[]) => {
  const data = catsIds.map((categoryId) => ({
    userId,
    categoryId,
  }))

  return await prisma.userCategory.createMany({
    data,
  })
}