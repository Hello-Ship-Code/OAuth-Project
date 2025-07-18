import { prisma } from '../config/database'

export const getUserCategories = async (ids: string[]) => {
  return await prisma.categories.findMany({
    where: {
      id: {
        in: ids, // Use 'in' for an array of IDs
      },
    },
  })
}