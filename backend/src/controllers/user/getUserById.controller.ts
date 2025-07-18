import { RequestHandler } from 'express'

import { getUserId } from '../../logic/getUserId'

export const getUserById: RequestHandler = async (_req, res, next) => {
  try {
    const userId = res.locals.user.id

    const user = await getUserId(userId)

    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
}