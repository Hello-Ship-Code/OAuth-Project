import { prisma } from '../config/database'

import { Category } from '../types/category.types'

export const categories = async (userData: Category) => {
  return await prisma.categories.create({
    data: {
      name: userData.name,
      src: userData.src,
      priority: userData.priority,
      icon: userData.icon,
    },
  })
}
