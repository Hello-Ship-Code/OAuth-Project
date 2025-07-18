import { RequestHandler } from 'express'

import { getCategories } from '../../logic/getCategories'

export const getCategoriesController: RequestHandler = async (_req, res, next) => {
  try {
    const categories = await getCategories()

    if (!categories) {
      res.status(404).json({ message: 'No Categories found!!!' })
      return
    }

    res.json(categories)
  } catch (error) {
    next(error)
  }
}