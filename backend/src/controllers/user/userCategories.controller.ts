import { RequestHandler } from 'express'

import { prisma } from '../../config/database'
import { linksUserToCat } from '../../logic/linksUserToCat'

export const userCategoriesController: RequestHandler = async (req, res, next) => {
  try {
    const userId = res.locals.user?.id

    const catsIds: string[] = req.body

    if (!catsIds || catsIds.length !== 10) {
      res.status(409).json({ message: 'Please select exactly 10 categories' })
      return
    }

    const existingCount = await prisma.userCategory.count({
      where: { userId },
    })

    if (existingCount >= 10) {
      res.status(409).json({ message: 'You have already selected your 10 categories' })
      return
    }

    const cats = await linksUserToCat(userId, catsIds)

    res.status(201).json({ message: 'Categories selected successfully', categories: cats })
  } catch (error) {
    next(error)
  }
}