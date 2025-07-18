import { prisma } from '../config/database'

export const getUserId = async (userId: string) => {
  const user = await prisma.user.findFirst({
    where: { id: userId },
    select: {
      id: true,
      userName: true,
      fullName: true,
      wallet: true,
      categories: true,
    },
  })

  return user
}