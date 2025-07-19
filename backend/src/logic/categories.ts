import { prisma } from '../config/database'
import { Category } from '../types/category.types'

export const createCategories = async (categoriesData: Category[]) => {
  return prisma.categories.createMany({
    data: categoriesData,
    // skipDuplicates: true,
  })
}
