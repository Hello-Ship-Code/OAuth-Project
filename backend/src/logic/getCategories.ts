import { prisma } from '../config/database'

export const getCategories = async () => {
  return await prisma.categories.findMany({})
}