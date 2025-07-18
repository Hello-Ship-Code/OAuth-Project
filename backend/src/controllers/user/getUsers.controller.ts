import { RequestHandler } from 'express'

import { prisma } from '../../config/database'

export const getUsersController: RequestHandler = async (_req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      select: { userName: true },
    })

    res.status(200).json({ data: users })
  } catch (e) {
    next(e)
  }
}