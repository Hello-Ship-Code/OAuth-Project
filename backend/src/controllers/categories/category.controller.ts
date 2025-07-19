import { RequestHandler } from 'express'
import { createCategories } from '../../logic/categories'

export const categoriesController: RequestHandler = async (req, res, next) => {
  try {
    const categoriesData = req.body // expecting an array directly

    const result = await createCategories(categoriesData)

    res.status(201).json({
      message: 'Categories inserted successfully 🎉',
      insertedCount: result.count,
    })
  } catch (error) {
    next(error)
  }
}
