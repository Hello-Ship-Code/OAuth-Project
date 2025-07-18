import { RequestHandler } from 'express'

import { findCatByName } from '../../lib/category/findCatByName'
import { categories } from '../../logic/categories'
import { categoriesValidation } from '../../validation/categories/categories-validation'

import { Category } from '../../types/category.types'

export const categoriesController: RequestHandler = async (req, res, next) => {
  try {
    const userData: Category = categoriesValidation.parse(req.body)

    const existingCategory = await findCatByName(`${userData.name}`)

    if (existingCategory) {
      res.status(409).json({ message: '🙄 category already exists' })
      return
    }

    const newCategory = await categories(userData)

    res.status(201).json({ message: 'Category created successfully 🥳', category: newCategory })
  } catch (error) {
    next(error)
  }
}