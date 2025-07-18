import { RequestHandler } from 'express'

import { getUserCategories } from '../../logic/getUserCategories'
import { getUserCategoriesId } from '../../logic/getUserCategoriesId'

export const getUserCategoriesController: RequestHandler = async (_req, res, next) => {
  try {
    const user = res.locals.user

    const userCategoriesId = await getUserCategoriesId(user.id)

    // Check if userCategoriesId is null or the categories array is empty
    if (
      !userCategoriesId ||
      !userCategoriesId.categories ||
      userCategoriesId.categories.length === 0
    ) {
      res.status(404).json({ message: 'No categories found for the user' })
      return
    }

    // Map over the categories to extract the categoryId
    const categoryIds = userCategoriesId.categories.map((item) => item.categoryId)

    const userCategories = await getUserCategories(categoryIds)
    console.log(userCategories)

    res.json(userCategories)
  } catch (e) {
    next(e)
  }
}