import { prisma } from '../config/database'

export const userProfile = async (userData: any) => {
  return await prisma.user.findFirst({
    where: { id: userData.id },
    select: {
      userName: true,
      wallet: {
        select: {
          id: true,
          userCoins: true,
        },
      },
    },
  })
}