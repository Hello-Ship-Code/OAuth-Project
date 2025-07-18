import { prisma } from '../config/database'

export const getUserCategoriesId = async (userId: string) => {
  return await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      categories: {
        select: {
          categoryId: true,
        },
      },
    },
  })
}